import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { ArrowLeftRight } from "lucide-react";

type Props = {
  leftSrc: string;
  leftAlt: string;
  rightSrc: string;
  rightAlt: string;
};

export function BeforeAfterSlider({ leftSrc, leftAlt, rightSrc, rightAlt }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) update(e.clientX);
  };
  const onUp = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const map: Record<string, number> = { ArrowLeft: Math.max(0, pos - 5), ArrowRight: Math.min(100, pos + 5), Home: 0, End: 100 };
    if (e.key in map) {
      e.preventDefault();
      setPos(map[e.key] ?? pos);
    }
  };

  return (
    <div
      ref={ref}
      role="slider"
      tabIndex={0}
      aria-label="Comparar imagens: arraste para os lados"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onKeyDown={onKey}
      style={{ touchAction: "pan-y" }}
      className="relative mx-auto aspect-[4/5] w-full max-w-[1040px] cursor-ew-resize select-none overflow-hidden rounded-[16px] shadow-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring sm:aspect-[4/3]"
    >
      <img src={rightSrc} alt={rightAlt} loading="lazy" draggable={false} className="absolute inset-0 h-full w-full select-none object-cover" />
      <img
        src={leftSrc}
        alt={leftAlt}
        loading="lazy"
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        className="absolute inset-0 h-full w-full select-none object-cover"
      />
      <div className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-white bg-[#6B1F1A] text-white shadow-soft">
          <ArrowLeftRight size={24} />
        </span>
      </div>
    </div>
  );
}

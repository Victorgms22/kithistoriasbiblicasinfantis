export const CHECKOUT_BASE = "https://pay.cakto.com.br/3mn4tev_1295207";
export const TRACKING_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "sck", "fbclid", "src"] as const;
const STORAGE_KEY = "checkout_tracking";

/** Builds the checkout URL with tracking params. Existing params on the base link are kept and never duplicated. */
export function buildCheckoutUrl(base: string, params: Record<string, string>): string {
  const keys = Object.keys(params);
  if (keys.length === 0) return base;
  const url = new URL(base);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  return url.toString();
}

/** Reads tracking params from the current URL, merges with sessionStorage, saves and returns them. */
export function captureTracking(search: string): Record<string, string> {
  let stored: Record<string, string> = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    stored = {};
  }
  const qs = new URLSearchParams(search);
  const found: Record<string, string> = {};
  for (const k of TRACKING_KEYS) {
    const v = qs.get(k);
    if (v) found[k] = v;
  }
  const merged = { ...stored, ...found };
  try {
    if (Object.keys(merged).length) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    /* storage unavailable */
  }
  return merged;
}

export function trackBuyClick() {
  const w = window as unknown as { fbq?: (...a: unknown[]) => void };
  if (typeof w.fbq === "function") w.fbq("trackCustom", "ClicouComprar");
}

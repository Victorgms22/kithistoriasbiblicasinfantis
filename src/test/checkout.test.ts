import { describe, it, expect } from "vitest";
import { buildCheckoutUrl, CHECKOUT_BASE } from "@/lib/checkout";

describe("buildCheckoutUrl", () => {
  it("keeps the link identical without params", () => {
    expect(buildCheckoutUrl(CHECKOUT_BASE, {})).toBe("https://pay.cakto.com.br/3mn4tev_1295207");
  });
  it("encodes pipes and appends utms", () => {
    const u = new URL(buildCheckoutUrl(CHECKOUT_BASE, { utm_source: "FB", utm_campaign: "Teste|123" }));
    expect(u.searchParams.get("utm_campaign")).toBe("Teste|123");
    expect(u.search).toContain("Teste%7C123");
  });
  it("does not duplicate an existing param", () => {
    const out = buildCheckoutUrl(CHECKOUT_BASE + "?utm_source=X&a=1", { utm_source: "FB" });
    const u = new URL(out);
    expect(u.searchParams.getAll("utm_source")).toEqual(["FB"]);
    expect(u.searchParams.get("a")).toBe("1");
  });
});

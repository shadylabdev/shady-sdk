/**
 * @shady/ai-scanner
 * Minimal client for AI-driven scanning and predictive privacy scoring.
 * Replace endpoints with your API once available.
 */

export class AiScanner {
  constructor(private opts: { baseUrl: string; apiKey?: string }) {}

  async scanWallet(pubkey: string, range: "24h" | "7d" | "30d") {
    const r = await fetch(`${this.opts.baseUrl}/scan?pubkey=${pubkey}&range=${range}`, {
      headers: { "x-api-key": this.opts.apiKey ?? "" }
    });
    if (!r.ok) throw new Error(`ai-scan: ${r.status}`);
    return r.json() as Promise<{
      total: number;
      stealth: Array<{ signature: string; reason: string; confidence: "low" | "med" | "high" }>;
    }>;
  }
}

export class PredictivePrivacy {
  /**
   * Heuristic placeholder. Swap with your ML/graph model later.
   */
  score(pattern: { times: number[]; amounts: string[]; counterparties: string[] }) {
    const risk = Math.min(100, (pattern.counterparties.length * 7) + pattern.times.length);
    const tips =
      risk > 60
        ? ["Rotate stealth address", "Enable zk-Gate for swaps", "Randomize timing"]
        : ["Pattern OK"];
    return { risk, tips };
  }
}

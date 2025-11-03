# @shady/ai-scanner

Client for **AI Scanner** (stealth detection) and a placeholder **Predictive Privacy** heuristic.

## Usage
```ts
import { AiScanner, PredictivePrivacy } from "@shady/ai-scanner";

const ai = new AiScanner({ baseUrl: "https://api.shady.to/ai", apiKey: "YOUR_KEY" });
const report = await ai.scanWallet("YourPubkey", "7d");

const model = new PredictivePrivacy();
const res = model.score({ times: [1,2,3], amounts: ["0.1","1.0"], counterparties: ["A","B","C"] });
console.log(report.total, res.risk, res.tips);

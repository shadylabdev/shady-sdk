# @shady/wallet

Thin adapters for browsers to connect common Solana wallets.

## Usage
```ts
import { connectPhantom, connectBackpack } from "@shady/wallet";

const signer = await connectPhantom();
// or
// const signer = await connectBackpack();
console.log("Wallet:", signer.publicKey);


---

## Step 16 — (Optional but recommended) Minimal example file

This makes the repo friendlier for newcomers.

### 16.1 `examples/quick-start.md`
**Path:** `examples/quick-start.md`
```md
# Quick Start

Install deps locally, then:

```ts
import { generateMetaKey, deriveStealthAddress } from "@shady/stealth";
import { ZkGateClient } from "@shady/zk-gate";
import { AiScanner } from "@shady/ai-scanner";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const meta = generateMetaKey();
const eph = crypto.getRandomValues(new Uint8Array(32));
const { stealthPubkey } = deriveStealthAddress({ viewPub: meta.viewPub, spendPub: meta.spendPub }, eph);

const conn = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
const zk = new ZkGateClient(conn, { cluster: "mainnet", minBalanceLamports: 100_000_000, ttlSeconds: 86400 });

const owner = new PublicKey("YourPubkey...");
const proof = await zk.balanceProof(owner);

const ai = new AiScanner({ baseUrl: "https://api.shady.to/ai" });
const report = await ai.scanWallet(owner.toBase58(), "7d");
console.log("stealth pubkey bytes:", stealthPubkey.length, "scan total:", report.total);

# @shady/private-swap

Integrates **Raydium Aggregator** with Shady’s **privacy layer** via `zk-Gate`.  
Allows users to swap tokens (e.g. `SOL ↔ USDC`) while staying anonymous.

## Features
- Real-time quote fetching (Raydium)
- Optional zk-Gate proof validation
- Client-side only execution
- Compatible with Phantom/Backpack wallets

## Usage
```ts
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { getQuote, executePrivateSwap } from "@shady/private-swap";
import { ZkGateClient } from "@shady/zk-gate";

const conn = new Connection(clusterApiUrl("mainnet-beta"));
const owner = new PublicKey("YourPubkey");
const zk = new ZkGateClient(conn, { cluster: "mainnet", minBalanceLamports: 100_000_000 });

const quote = await getQuote({ inMint: "SOL", outMint: "USDC", amount: "1" });
const tx = await executePrivateSwap(conn, owner, quote, zk);
console.log("Swap executed:", tx.txSig);

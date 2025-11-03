# @shady/wallet

Thin adapters for browsers to connect common Solana wallets.

## Usage
```ts
import { connectPhantom, connectBackpack } from "@shady/wallet";

const signer = await connectPhantom();
// or
// const signer = await connectBackpack();
console.log("Wallet:", signer.publicKey);

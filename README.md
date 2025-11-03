# Shady SDK (Monorepo)

**TypeScript SDK for building privacy-first apps on Solana.**  
This monorepo provides modular packages to integrate Shady features:
- **Stealth Address** derivation helpers  
- **zk-Gate** (zero-knowledge access layer)  
- **Private Swap** (Raydium aggregator wrapper) *(coming soon)*  
- **AI Scanner & Predictive Privacy** *(coming soon)*  
- **Wallet adapters** (Phantom/Backpack) *(coming soon)*

## Packages
- `@shady/sdk-core` – crypto/encoding/storage primitives  
- `@shady/stealth` – meta-keys, stealth derivation, relay plan helpers  
- `@shady/zk-gate` – lightweight ZK access layer (proof issue/consume)

> Note: cryptography and stealth derivation in this repo are **placeholders** for prototyping.  
> Align the derivation scheme with Shady on-chain programs and perform **security audits** before production.

## Dev
```bash
# local development (optional)
corepack enable && npm i -g pnpm
pnpm install
pnpm -r build
pnpm -r test

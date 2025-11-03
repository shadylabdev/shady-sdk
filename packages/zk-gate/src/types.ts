export type ProofKind = "balance" | "ownership" | "whitelist";

export interface ZkGateConfig {
  cluster: "mainnet" | "devnet" | "localnet";
  minBalanceLamports?: number;
  ttlSeconds?: number;       // proof expiration
  maxUses?: number;          // usage counter
}

export interface ZkProof {
  id: string;
  kind: ProofKind;
  payload: Uint8Array;       // opaque to the caller
  issuedAt: number;          // epoch seconds
  ttlSeconds?: number;
  remainingUses?: number;
}

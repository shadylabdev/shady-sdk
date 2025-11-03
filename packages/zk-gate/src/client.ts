import type { Connection, PublicKey } from "@solana/web3.js";
import { kdfSha256 } from "@shady/sdk-core/lib/crypto";
import type { ZkGateConfig, ZkProof, ProofKind } from "./types";

/**
 * ZkGateClient creates lightweight, client-side proofs.
 * This is a placeholder (no real ZK circuit). Replace with real prover later.
 */
export class ZkGateClient {
  constructor(private connection: Connection, private cfg: ZkGateConfig) {}

  async balanceProof(owner: PublicKey, kind: ProofKind = "balance"): Promise<ZkProof> {
    const lamports = await this.connection.getBalance(owner);
    const ok = this.cfg.minBalanceLamports ? lamports >= this.cfg.minBalanceLamports : true;

    // Fake-proof: hash (owner||lamports||time). Replace with circuit output.
    const now = Math.floor(Date.now() / 1000);
    const data = new Uint8Array([
      ...owner.toBytes(),
      ...(new Uint8Array(new BigInt64Array([BigInt(lamports)]).buffer)),
      ...(new Uint8Array(new Uint32Array([now]).buffer))
    ]);
    const digest = kdfSha256(data);

    return {
      id: Buffer.from(digest).toString("hex").slice(0, 32),
      kind,
      payload: digest,
      issuedAt: now,
      ttlSeconds: this.cfg.ttlSeconds ?? 24 * 3600,
      remainingUses: this.cfg.maxUses ?? 10
    };
  }

  consume(proof: ZkProof): ZkProof {
    const now = Math.floor(Date.now() / 1000);
    if (proof.ttlSeconds && now > proof.issuedAt + proof.ttlSeconds) {
      throw new Error("Proof expired");
    }
    if (typeof proof.remainingUses === "number" && proof.remainingUses <= 0) {
      throw new Error("No remaining uses");
    }
    return { ...proof, remainingUses: (proof.remainingUses ?? 1) - 1 };
  }
}

import { kdfSha256 } from "@shady/sdk-core/lib/crypto";
import type { MetaPublicKey } from "./metaKey";

/** Derive stealth address components (placeholder KDF). */
export function deriveStealthAddress(meta: MetaPublicKey, ephemeralPriv: Uint8Array) {
  const mix = new Uint8Array([...ephemeralPriv, ...meta.viewPub, ...meta.spendPub]);
  const tweak = kdfSha256(mix);
  // Untuk PoC, gunakan tweak sebagai “pubkey” turunan.
  return { stealthPubkey: tweak, sharedSecret: tweak };
}

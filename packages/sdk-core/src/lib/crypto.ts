import { ed25519 } from "@noble/curves/ed25519";
import { sha256 } from "@noble/hashes/sha256";

export function ed25519Keypair() {
  const priv = ed25519.utils.randomPrivateKey();
  const pub = ed25519.getPublicKey(priv);
  return { priv, pub };
}

export function kdfSha256(bytes: Uint8Array) {
  return sha256(bytes);
}

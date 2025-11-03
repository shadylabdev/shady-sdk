import { ed25519Keypair } from "@shady/sdk-core/lib/crypto";

/** Simple meta-key generator (placeholder) */
export function generateMetaKey() {
  const spend = ed25519Keypair();
  // NOTE: untuk PoC, viewPub kita stub dari spendPub.
  const viewPub = spend.pub.slice(0, 32);
  return {
    viewPriv: new Uint8Array(32),
    viewPub,
    spendPriv: spend.priv,
    spendPub: spend.pub
  };
}

export type MetaPublicKey = { viewPub: Uint8Array; spendPub: Uint8Array };

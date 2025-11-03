export interface Signer {
  publicKey: string;
  signTx(tx: Uint8Array): Promise<Uint8Array>;
}

/** Minimal Phantom connector (browser). */
export async function connectPhantom(): Promise<Signer> {
  const anyWin = window as any;
  if (!anyWin?.solana?.isPhantom) throw new Error("Phantom not detected");
  const resp = await anyWin.solana.connect();
  return {
    publicKey: resp.publicKey.toString(),
    signTx: async (tx) => {
      const signed = await anyWin.solana.signTransaction(tx);
      return new Uint8Array(signed.serialize());
    }
  };
}

/** Minimal Backpack connector (browser) — adjust if API differs. */
export async function connectBackpack(): Promise<Signer> {
  const anyWin = window as any;
  const bp = anyWin?.backpack?.ethereum ?? anyWin?.backpack?.solana ?? null;
  if (!bp) throw new Error("Backpack not detected");
  const resp = await anyWin.backpack.connect();
  return {
    publicKey: resp.publicKey.toString(),
    signTx: async (tx) => {
      const signed = await anyWin.backpack.signTransaction(tx);
      return new Uint8Array(signed.serialize());
    }
  };
}

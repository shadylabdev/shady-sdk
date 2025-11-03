export const toHex = (u8: Uint8Array) =>
  [...u8].map(b => b.toString(16).padStart(2, "0")).join("");

export const fromHex = (hex: string) =>
  new Uint8Array(hex.match(/.{1,2}/g)!.map(b => parseInt(b, 16)));

export interface StorageLike {
  get(key: string): string | null;
  set(key: string, val: string): void;
  remove(key: string): void;
}

export const browserStorage: StorageLike = {
  get: (k) => (typeof localStorage !== "undefined" ? localStorage.getItem(k) : null),
  set: (k, v) => { if (typeof localStorage !== "undefined") localStorage.setItem(k, v); },
  remove: (k) => { if (typeof localStorage !== "undefined") localStorage.removeItem(k); }
};

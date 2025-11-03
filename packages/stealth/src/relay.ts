export type RelayPlan = { toRelay: Uint8Array; toRecipient: Uint8Array };

export function buildRelayPlan(): RelayPlan {
  return { toRelay: new Uint8Array(), toRecipient: new Uint8Array() };
}

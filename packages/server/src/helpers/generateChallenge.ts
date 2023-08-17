import { isoCrypto } from "./iso/index.ts";

/**
 * Generate a suitably random value to be used as an attestation or assertion challenge
 */
export async function generateChallenge(): Promise<Uint8Array> {
  /**
   * WebAuthn spec says that 16 bytes is a good minimum:
   *
   * "In order to prevent replay attacks, the challenges MUST contain enough entropy to make
   * guessing them infeasible. Challenges SHOULD therefore be at least 16 bytes long."
   *
   * Just in case, let's double it
   */
  const challenge = new Uint8Array(32);

  await isoCrypto.getRandomValues(challenge);

  return challenge;
}

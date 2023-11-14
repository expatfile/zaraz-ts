/**
 * A utility that checks if zaraz exists on the window object. If not it throws
 * an error. Else returns the zaraz object.
 */
export function getZaraz() {
  if (!window?.zaraz) {
    throw new Error(
      `Cannot use Zaraz Web API, because window.zaraz is not defined.`,
    );
  }

  return window.zaraz;
}

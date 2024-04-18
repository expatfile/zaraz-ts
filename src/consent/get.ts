import { getZaraz } from '../helpers/get-zaraz';

/**
 * Get the consent status for a specific purpose using the purpose ID.
 *
 * ```
 * true: The consent was granted.
 * false: The consent was not granted.
 * undefined: The purpose does not exist.
 * ```
 */
export function get(purposeId: string): boolean | undefined {
  return getZaraz({ skipQueue: true })?.consent?.get(purposeId) || undefined;
}

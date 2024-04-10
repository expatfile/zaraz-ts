import { getZaraz } from '../helpers/get-zaraz';

/**
 * Get the current consent status for a purpose using the purpose ID.
 *
 * ```
 * true: The consent was granted.
 * false: The consent was not granted.
 * undefined: The purpose does not exist.
 * ```
 */
export function get(purposeId: string): boolean | undefined {
  return getZaraz().consent.get(purposeId);
}

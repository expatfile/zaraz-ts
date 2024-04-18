import { getZaraz } from '../helpers/get-zaraz';

export type ConsentPreferences = { [key: string]: boolean };

/**
 * Set the consent status for a specific purpose using the purpose ID.
 *
 * ```
 * true: The consent was granted.
 * false: The consent was not granted.
 * ```
 */
export function set(consentPreferences: ConsentPreferences): void {
  getZaraz({ skipQueue: true })?.consent?.set(consentPreferences);
}

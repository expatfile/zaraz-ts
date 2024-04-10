import { getZaraz } from '../helpers/get-zaraz';

/**
 * Set the consent status for some purposes using the purpose ID.
 */
export function set(consentPreferences: { [key: string]: boolean }): void {
  getZaraz().consent.set(consentPreferences);
}

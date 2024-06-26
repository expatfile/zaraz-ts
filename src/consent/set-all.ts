import { getZaraz } from '../helpers/get-zaraz';

/**
 * Set the consent status for all purposes at once.
 */
export function setAll(consentStatus: boolean): void {
  getZaraz({ skipQueue: true })?.consent?.setAll(consentStatus);
}

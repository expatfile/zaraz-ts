import { getZaraz } from './helpers/get-zaraz';

export function setConsent(key: string, value: boolean): void {
  const zaraz = getZaraz();
  zaraz.consent[key] = value;
}

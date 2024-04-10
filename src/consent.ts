import { getZaraz } from './helpers/get-zaraz';

export function setConsent(key: string, value: boolean): void {
  const zaraz = getZaraz();
  if (zaraz && zaraz.consent) {
    zaraz.consent[key] = value;
  } else {
    console.error('Zaraz consent API is not available');
  }
}

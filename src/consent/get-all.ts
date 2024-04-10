import { getZaraz } from '../helpers/get-zaraz';

/**
 * Returns an object with the consent status of all purposes.
 */
export function getAll(): { [key: string]: boolean } {
  return getZaraz().consent.getAll();
}

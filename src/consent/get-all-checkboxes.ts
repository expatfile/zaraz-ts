import { getZaraz } from '../helpers/get-zaraz';

/**
 * Returns an object with the checkbox status of all purposes.
 */
export function getAllCheckboxes(): { [key: string]: boolean } {
  return getZaraz().consent.getAllCheckboxes();
}

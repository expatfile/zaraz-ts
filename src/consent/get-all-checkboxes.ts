import { getZaraz } from '../helpers/get-zaraz';

export type CheckboxStatuses = {
  [key: string]: undefined | boolean; // The key is equal to the ID in Zaraz, e.g. "OVAL" or "DVEA".
};

/**
 * Returns an object with the checkbox status of all purposes.
 */
export function getAllCheckboxes(): CheckboxStatuses {
  return getZaraz({ skipQueue: true })?.consent?.getAllCheckboxes() || {};
}

import { getZaraz } from '../helpers/get-zaraz';

export type PurposeStatuses = {
  [key: string]: undefined | boolean; // The key is equal to the ID in Zaraz, e.g. "OVAL" or "DVEA".
};

/**
 * Returns an object with the status of all purposes.
 *
 * ```
 * true: the consent has been given
 * false: the consent has been denied
 * undefined: the consent has never been given or seen
 * ```
 *
 * When Zaraz hasn't been initalised, it returns an empty object.
 */

export function getAll(): PurposeStatuses {
  return getZaraz({ skipQueue: true })?.consent?.getAll() || {};
}

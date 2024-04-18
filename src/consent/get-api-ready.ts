import { getZaraz } from '../helpers/get-zaraz';

/**
 * Indicates whether the Consent API is currently available on the page.
 *
 * ```
 * true: the Zaraz consent API is ready to be used with e.g. getAll(), getAllCheckboxes() etc.
 * false: the Zaraz consent API is not ready to be used
 * ```
 */
export function getAPIReady(): boolean {
  return getZaraz({ skipQueue: true })?.consent?.APIReady || false;
}

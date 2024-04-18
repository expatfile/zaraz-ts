import { getZaraz } from '../helpers/get-zaraz';

/**
 * Set the consent status for some purposes using the purpose ID.
 */
export function setCheckboxes(checkboxesStatus: {
  [key: string]: boolean;
}): void {
  getZaraz({ skipQueue: true })?.consent?.setCheckboxes(checkboxesStatus);
}

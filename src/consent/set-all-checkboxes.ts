import { getZaraz } from '../helpers/get-zaraz';

/**
 * Set the checkboxStatus status for all purposes in the consent modal at once.
 */
export function setAllCheckboxes(checkboxStatus: boolean): void {
  getZaraz().consent.setAllCheckboxes(checkboxStatus);
}

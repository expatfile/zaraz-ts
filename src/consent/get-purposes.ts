import { getZaraz } from '../helpers/get-zaraz';

type Purpose = {
  name: string;
  description: string;
  order: number;
};

/**
 * An object containing all configured purposes, with their ID, name, description, and order.
 */
export function getPurposes(): { [key: string]: Purpose } {
  return getZaraz().consent.purposes;
}

import { getZaraz } from '../helpers/get-zaraz';

export type Purpose = {
  order: number;
  name: {
    [key: string]: string; // the key is the language set in Zaraz (e.g. "en")
  };
  description: {
    [key: string]: string; // the key is the language set in Zaraz (e.g. "en")
  };
};

export type Purposes = {
  [key: string]: Purpose; // the key is also the ID visible in Zaraz (e.g. "OrGL" or "OAVL")
};

/**
 * An object containing all configured purposes, with their ID, name, description, and order.
 */
export function getPurposes(): Purposes {
  return getZaraz({ skipQueue: true })?.consent?.purposes || {};
}

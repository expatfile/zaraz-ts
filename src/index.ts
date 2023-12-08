/* istanbul ignore file */

import { ecommerce } from './ecommerce';
import { set } from './set';
import { track } from './track';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    zaraz: any;
  }
}

export const zaraz = {
  track,
  set,
  ecommerce,
};

// Export typing etc.
export * from './ecommerce';
export * from './set';
export * from './track';

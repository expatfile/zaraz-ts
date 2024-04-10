/* istanbul ignore file */

import { consent } from './consent';
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
  consent,
};

// Export typing etc.
export * from './consent';
export * from './ecommerce';
export * from './set';
export * from './track';

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

zaraz.ecommerce('Order Completed', {
  checkout_id: '616727740',
  order_id: '817286897056801',
  affiliation: 'affiliate.com',
  total: 30.0,
  revenue: 20.0,
  shipping: 3,
  tax: 2,
  discount: 5,
  coupon: 'winter-sale',
  currency: 'USD',
  products: [
    {
      product_id: '999666321',
      sku: '8251511',
      name: 'Boy’s shorts',
      price: 10,
      quantity: 2,
      category: 'shorts',
    },
    {
      product_id: '742566131',
      sku: '7251567',
      name: 'Blank T-shirt',
      price: 5,
      quantity: 2,
      category: 'T-shirts',
    },
  ],
});

// Export typing etc.
export * from './ecommerce';
export * from './set';
export * from './track';

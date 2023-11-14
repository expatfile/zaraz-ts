import { getZaraz } from './helpers/get-zaraz';

export type Product = {
  // Product ID displayed on the product list.
  product_id: string;
  // Product SKU displayed on the product list.
  sku: string;
  // Product category displayed on the product list.
  category?: string;
  // Product name displayed on the product list.
  name: string;
  // Product brand displayed on the product list.
  brand?: string;
  // Product variant displayed on the product list.
  variant?: string;
  // Price of the product displayed on the product list.
  price: number;
  // Quantity of a product displayed on the product list.
  quantity?: number;
  // Name or serial number of coupon code associated with product displayed on the product list.
  coupon?: string;
  // Product position in the product list (for example, 2).
  position?: number;
};

export type Parameters = {
  // Product ID.
  product_id: string;
  // Product SKU number.
  sku: string;
  // Product category.
  category: string;
  // Product name.
  name: string;
  // Product brand name.
  brand: string;
  // Product variant (depending on the product, it could be product color, size, etc.).
  variant: string;
  // Product price.
  price: number;
  // Product number of units.
  quantity: number;
  // Name or serial number of coupon code associated with product.
  coupon: string;
  // Product position in the product list (for example, 2).
  position: number;
  // List of products displayed in the product list.
  products: Product[];
  // Checkout ID.
  checkout_id: string;
  // Internal ID of order/transaction/purchase.
  order_id: string;
  // Name of affiliate from which the order occurred.
  affiliation: string;
  // Revenue with discounts and coupons added in.
  total: number;
  // Revenue excluding shipping and tax.
  revenue: number;
  // Cost of shipping for transaction.
  shipping: number;
  // Total tax for transaction.
  tax: number;
  // Total discount for transaction.
  discount: number;
  // Name or serial number of coupon redeemed on the transaction-level.
  // coupon: string; // TODO: dedupe
  // Currency code for the transaction.
  currency: string;
  // Total value of the product after quantity.
  value: number;
  // Label for creative asset of promotion being tracked.
  creative: string;
  // Product search term.
  query: string;
  // The Number of the checkout step in the checkout process.
  step: number;
  // The type of payment used.
  payment_type: string;
};

/**
 * Log this event when the user has been presented with a list of items of a
 * certain category.
 *
 * Usage:
 * ```ts
 * zaraz.ecommerce('Product List Viewed', {
 *   products: [
 *     {
 *       product_id: '999555321',
 *       sku: '2671033',
 *       category: 'T-shirts',
 *       name: 'V-neck T-shirt',
 *       brand: 'Cool Brand',
 *       variant: 'White',
 *       price: 14.99,
 *       currency: 'usd',
 *       value: 18.99,
 *       position: 1,
 *     },
 *     {
 *       product_id: '999555322',
 *       sku: '2671034',
 *       category: 'T-shirts',
 *       name: 'T-shirt',
 *       brand: 'Cool Brand',
 *       variant: 'Pink',
 *       price: 10.99,
 *       currency: 'usd',
 *       value: 16.99,
 *       position: 2,
 *     },
 *   ],
 * });
 * ```
 */
export function ecommerce(
  eventName: 'Product List Viewed',
  parameters: {
    products: Parameters['products'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  },
): Promise<void>;

export function ecommerce(
  eventName: 'Products Searched',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

export function ecommerce(
  eventName: 'Product Clicked',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

/**
 * This event signifies that an item was added to a cart for purchase.
 *
 * Usage:
 * ```ts
 * zaraz.ecommerce('Product Added', {
 *   product_id: '999555321',
 *   sku: '2671033',
 *   category: 'T-shirts',
 *   name: 'V-neck T-shirt',
 *   brand: 'Cool Brand',
 *   variant: 'White',
 *   price: 14.99,
 *   currency: 'usd',
 *   quantity: 1,
 *   coupon: 'SUMMER-SALE',
 *   position: 2,
 * });
 * ```
 */
export function ecommerce(
  eventName: 'Product Added',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

export function ecommerce(
  eventName: 'Product Added to Wishlist',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

export function ecommerce(
  eventName: 'Product Removed',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

/**
 * This event signifies that some content was shown to the user. Use this event
 * to discover the most popular items viewed.
 *
 * Usage:
 * ```ts
 * zaraz.ecommerce('Product Viewed', {
 *   product_id: '999555321',
 *   sku: '2671033',
 *   category: 'T-shirts',
 *   name: 'V-neck T-shirt',
 *   brand: 'Cool Brand',
 *   variant: 'White',
 *   price: 14.99,
 *   currency: 'usd',
 *   value: 18.99,
 * });
 * ```
 */
export function ecommerce(
  eventName: 'Product Viewed',
  parameters: {
    product_id: Parameters['product_id'];
    sku?: Parameters['sku'];
    category?: Parameters['category'];
    name: Parameters['name'];
    brand?: Parameters['brand'];
    variant?: Parameters['variant'];
    price: Parameters['price'];
    currency: Parameters['currency'];
    value: Parameters['value'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  },
): Promise<void>;

export function ecommerce(
  eventName: 'Cart Viewed',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

export function ecommerce(
  eventName: 'Checkout Started',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

/**
 * TODO: find description.
 *
 * Usage:
 * ```ts
 * zaraz.ecommerce('Checkout Step Completed', {
 *   step: 1,
 * });
 * ```
 */
export function ecommerce(
  eventName: 'Checkout Step Viewed',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

export function ecommerce(
  eventName: 'Checkout Step Completed',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

export function ecommerce(
  eventName: 'Payment Info Entered',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

/**
 * This event signifies when one or more items is purchased by a user.
 *
 * Usage:
 * ```ts
 * zaraz.ecommerce('Order Completed', {
 *   checkout_id: '616727740',
 *   order_id: '817286897056801',
 *   affiliation: 'affiliate.com',
 *   total: 30.0,
 *   revenue: 20.0,
 *   shipping: 3,
 *   tax: 2,
 *   discount: 5,
 *   coupon: 'winter-sale',
 *   currency: 'USD',
 *   products: [
 *     {
 *       product_id: '999666321',
 *       sku: '8251511',
 *       name: 'Boy’s shorts',
 *       price: 10,
 *       quantity: 2,
 *       category: 'shorts',
 *     },
 *     {
 *       product_id: '742566131',
 *       sku: '7251567',
 *       name: 'Blank T-shirt',
 *       price: 5,
 *       quantity: 2,
 *       category: 'T-shirts',
 *     },
 *   ],
 * });
 * ```
 */
export function ecommerce(
  eventName: 'Order Completed',
  parameters: {
    checkout_id: Parameters['checkout_id'];
    order_id: Parameters['order_id'];
    affiliation?: Parameters['affiliation'];
    total: Parameters['total'];
    revenue: Parameters['revenue'];
    shipping: Parameters['shipping'];
    tax: Parameters['tax'];
    discount: Parameters['discount'];
    coupon?: Parameters['coupon'];
    currency: Parameters['currency'];
    products: Parameters['products'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  },
): Promise<void>;

export function ecommerce(
  eventName: 'Order Updated',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

export function ecommerce(
  eventName: 'Order Refunded',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

/**
 * TODO: find description.
 */
export function ecommerce(
  eventName: 'Order Cancelled',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

export function ecommerce(
  eventName: 'Clicked Promotion',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

export function ecommerce(
  eventName: 'Viewed Promotion',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

export function ecommerce(
  eventName: 'Shipping Info Entered',
  parameters?: Partial<Parameters>, // TODO: add types
): Promise<void>;

export function ecommerce(
  eventName: string,
  parameters?: Partial<Parameters>,
): Promise<void> {
  return getZaraz().ecommerce(eventName, parameters);
}

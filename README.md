![GitHub branch checks state][build-url] [![codecov][cov-img]][cov-url] [![Known Vulnerabilities][snyk-img]][snyk-url]

# Zaraz TS

A type-safe wrapper around the Cloudflare Zaraz Web API.

- Basic types for `zaraz.track()`;
- Basic types for `zaraz.set()`;
- Basic types for `zaraz.consent()`;
- Extensive types for `zaraz.ecommerce()`;
- Cheks for `zaraz` being available in the window.

### Usage 🧑‍💻

Import zaraz and call the desired method. That's it!

```ts
import { zaraz } from 'zaraz-ts';

// Track custom events on your website, that might happen in real time.
await zaraz.track('button clicked', { userId: 'ABC-123', value: 200 });
```

```ts
import { zaraz } from 'zaraz-ts';

// Make a variable available in all your events without manually setting it
// every time you are using zaraz.track().
zaraz.set('user_id', '123456');
```

```ts
import { zaraz } from 'zaraz-ts';

// Track common events of the e-commerce user journey, such as when a user adds
// a product to cart, starts the checkout funnel or completes an order.
await zaraz.ecommerce('Order Completed', {
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
```

Checkout the official Cloudflare docs for more details: https://developers.cloudflare.com/zaraz/web-api/.

### Maintenance 👷

This package is maintained and actively used by [Expatfile.tax][expatfile-site].
The #1 US expat tax e-filing software. 🇺🇸

[build-url]: https://img.shields.io/github/checks-status/expatfile/zaraz-ts/main
[cov-img]: https://codecov.io/gh/expatfile/zaraz-ts/branch/main/graph/badge.svg?token=mbGgsweFuP
[cov-url]: https://codecov.io/gh/expatfile/zaraz-ts
[snyk-img]: https://snyk.io/test/github/expatfile/zaraz-ts/badge.svg
[snyk-url]: https://snyk.io/test/github/expatfile/zaraz-ts
[expatfile-site]: https://expatfile.tax

import { ecommerce } from './ecommerce';

const trackMock = jest.fn();
const setMock = jest.fn();
const ecommerceMock = jest.fn();

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    zaraz: any;
  }
}

let windowObj: Window & typeof globalThis;

beforeAll(() => {
  windowObj = window;
});

afterAll(() => {
  window = windowObj;
});

describe('ecommerce()', () => {
  it('should call zaraz ecommerce when called', () => {
    window.zaraz = {
      track: trackMock,
      set: setMock,
      ecommerce: ecommerceMock,
    };

    ecommerce('Cart Viewed');

    expect(ecommerceMock).toHaveBeenCalledWith('Cart Viewed', undefined);
  });
});

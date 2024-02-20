import { spaPageview } from './spa-pageview';

const trackMock = jest.fn();
const setMock = jest.fn();
const ecommerceMock = jest.fn();
const spaPageviewMock = jest.fn();

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

describe('set()', () => {
  it('should call zaraz spaPageview when called', () => {
    window.zaraz = {
      track: trackMock,
      set: setMock,
      ecommerce: ecommerceMock,
      spaPageview: spaPageviewMock,
    };

    spaPageview();

    expect(spaPageviewMock).toHaveBeenCalledWith();
  });
});

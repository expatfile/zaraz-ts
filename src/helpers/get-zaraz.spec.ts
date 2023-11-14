import { getZaraz } from './get-zaraz';

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

describe('getZaraz()', () => {
  it('should return zaraz when it exists on the window', () => {
    window.zaraz = {
      track: trackMock,
      set: setMock,
      ecommerce: ecommerceMock,
    };

    expect(getZaraz()).toEqual({
      track: trackMock,
      set: setMock,
      ecommerce: ecommerceMock,
    });
  });

  it('should throw when zaraz does not exist on the window', () => {
    window.zaraz = undefined;

    expect(() => getZaraz()).toThrow(
      `Cannot use Zaraz Web API, because window.zaraz is not defined.`,
    );
  });
});

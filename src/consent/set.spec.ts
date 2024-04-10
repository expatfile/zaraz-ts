import { set } from './set';

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
  it('should call set method on zaraz consent with the correct argument', () => {
    const setMock = jest.fn();
    window.zaraz = {
      consent: {
        set: setMock,
      },
    };

    const consentPreferences = { key1: true, key2: false };
    set(consentPreferences);

    expect(setMock).toHaveBeenCalledWith(consentPreferences);
  });
});

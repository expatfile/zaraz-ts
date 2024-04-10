import { setConsent } from './consent';

const setConsentMock = jest.fn();

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

describe('setConsent()', () => {
  it('should call zaraz consent when called', () => {
    window.zaraz = {
      consent: setConsentMock,
    };

    setConsent('key', true);

    expect(setConsentMock).toHaveBeenCalledWith('key', true);
  });
});

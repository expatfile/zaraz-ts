import { setConsent } from './consent';

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
  it('should set zaraz consent when called', () => {
    const consentMock: { [key: string]: boolean } = {};
    window.zaraz = {
      consent: consentMock,
    };

    setConsent('key', true);

    expect(consentMock.key).toBe(true);
  });
});

import { get } from './get';

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

describe('get()', () => {
  it('should return the consent status for a purpose from zaraz consent', () => {
    const getMock = jest.fn().mockReturnValue(true);
    window.zaraz = {
      consent: {
        get: getMock,
      },
    };

    const consentStatus = get('key');

    expect(consentStatus).toBe(true);
    expect(getMock).toHaveBeenCalledWith('key');
  });
});

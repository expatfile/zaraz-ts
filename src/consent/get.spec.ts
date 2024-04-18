import { get } from './get';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    zaraz: any;
  }
}

let windowObj: Window & typeof globalThis;

const warnSpy = jest.spyOn(console, 'warn');

beforeAll(() => {
  windowObj = window;
  warnSpy.mockImplementation();
});

afterAll(() => {
  window = windowObj;
  warnSpy.mockRestore();
});

describe('get()', () => {
  it("should return undefined when the Zaraz consent API hasn't been initialised", () => {
    const consentStatus = get('key');
    expect(consentStatus).toBe(undefined);
  });

  it('should return the consent status for a purpose when the Zaraz consent API has been initialised', () => {
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

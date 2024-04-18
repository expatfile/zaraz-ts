import { set } from './set';

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

describe('set()', () => {
  it("should not break when the Zaraz consent API hasn't been initialised", () => {
    const result = set({ key1: true, key2: false });
    expect(result).toEqual(undefined);
  });

  it('should call set method on the Zaraz consent API with the correct argument', () => {
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

import { getAll } from './get-all';

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

describe('getAll()', () => {
  it("should return an empty object when the Zaraz consent API hasn't been initialised", () => {
    const consents = getAll();
    expect(consents).toEqual({});
  });

  it('should return an object of consents when the Zaraz consent API has been initialised', () => {
    const consentsMock = {
      key1: true,
      key2: false,
      key3: undefined,
    };

    window.zaraz = {
      consent: {
        getAll: jest.fn().mockReturnValue(consentsMock),
      },
    };

    const consents = getAll();

    expect(consents).toEqual(consentsMock);
  });
});

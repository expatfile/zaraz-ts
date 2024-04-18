import { getAPIReady } from './get-api-ready';

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

describe('getAPIReady()', () => {
  it("should return false when the Zaraz consent API hasn't been initialised", () => {
    const apiReady = getAPIReady();
    expect(apiReady).toEqual(false);
  });

  it('should return true when the Zaraz consent API has been initialised', () => {
    window.zaraz = {
      consent: {
        APIReady: true,
      },
    };

    const apiReady = getAPIReady();

    expect(apiReady).toEqual(true);
  });
});

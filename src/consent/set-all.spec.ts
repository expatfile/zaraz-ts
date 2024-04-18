import { setAll } from './set-all';

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

describe('setAll()', () => {
  it("should not break when the Zaraz consent API hasn't been initialised", () => {
    const result = setAll(true);
    expect(result).toEqual(undefined);
  });

  it('should call setAll method on the Zaraz consent API with the correct argument', () => {
    const setAllMock = jest.fn();

    window.zaraz = {
      consent: {
        setAll: setAllMock,
      },
    };

    setAll(true);

    expect(setAllMock).toHaveBeenCalledWith(true);
  });
});

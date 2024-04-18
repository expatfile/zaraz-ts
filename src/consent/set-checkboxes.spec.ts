import { setCheckboxes } from './set-checkboxes';

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

describe('setCheckboxes()', () => {
  it("should not break when the Zaraz consent API hasn't been initialised", () => {
    const result = setCheckboxes({});
    expect(result).toEqual(undefined);
  });

  it('should call setCheckboxes method on the Zaraz consent API with the correct argument', () => {
    const setCheckboxesMock = jest.fn();

    window.zaraz = {
      consent: {
        setCheckboxes: setCheckboxesMock,
      },
    };

    const checkboxesStatus = { key1: true, key2: false };

    setCheckboxes(checkboxesStatus);

    expect(setCheckboxesMock).toHaveBeenCalledWith(checkboxesStatus);
  });
});

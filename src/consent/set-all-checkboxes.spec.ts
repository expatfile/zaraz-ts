import { setAllCheckboxes } from './set-all-checkboxes';

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

describe('setAllCheckboxes()', () => {
  it("should not break when the Zaraz consent API hasn't been initialised", () => {
    const setAllCheckboxesMock = jest.fn();
    setAllCheckboxes(true);
    expect(setAllCheckboxesMock).toHaveBeenCalledTimes(0);
  });

  it('should call setAllCheckboxes method on the Zaraz consent API with the correct argument', () => {
    const setAllCheckboxesMock = jest.fn();

    window.zaraz = {
      consent: {
        setAllCheckboxes: setAllCheckboxesMock,
      },
    };

    setAllCheckboxes(true);

    expect(setAllCheckboxesMock).toHaveBeenCalledWith(true);
  });
});

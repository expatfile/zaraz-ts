import { setCheckboxes } from './set-checkboxes';

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

describe('setCheckboxes()', () => {
  it('should call setCheckboxes method on zaraz consent with the correct argument', () => {
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

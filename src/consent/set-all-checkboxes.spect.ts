import { setAllCheckboxes } from './set-all-checkboxes';

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

describe('setAllCheckboxes()', () => {
  it('should call setAllCheckboxes method on zaraz consent with the correct argument', () => {
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

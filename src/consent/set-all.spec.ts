import { setAll } from './set-all';

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

describe('setAll()', () => {
  it('should call setAll method on zaraz consent with the correct argument', () => {
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

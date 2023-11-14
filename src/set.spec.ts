import { set } from './set';

const trackMock = jest.fn();
const setMock = jest.fn();
const ecommerceMock = jest.fn();

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

describe('set()', () => {
  it('should call zaraz set when called', () => {
    window.zaraz = {
      track: trackMock,
      set: setMock,
      ecommerce: ecommerceMock,
    };

    set('user_id', '123456');

    expect(setMock).toHaveBeenCalledWith('user_id', '123456', undefined);
  });
});

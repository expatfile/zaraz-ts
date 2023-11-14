import { track } from './track';

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

describe('track()', () => {
  it('should call zaraz track when called', () => {
    window.zaraz = {
      track: trackMock,
      set: setMock,
      ecommerce: ecommerceMock,
    };

    track('button clicked', { userId: 'ABC-123', value: 200 });

    expect(trackMock).toHaveBeenCalledWith('button clicked', {
      userId: 'ABC-123',
      value: 200,
    });
  });
});

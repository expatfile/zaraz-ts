import { sendQueuedEvents } from './send-queued-events';

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

describe('sendQueuedEvents()', () => {
  it('should call sendQueuedEvents method on zaraz consent', () => {
    const sendQueuedEventsMock = jest.fn();
    window.zaraz = {
      consent: {
        sendQueuedEvents: sendQueuedEventsMock,
      },
    };

    sendQueuedEvents();

    expect(sendQueuedEventsMock).toHaveBeenCalled();
  });
});

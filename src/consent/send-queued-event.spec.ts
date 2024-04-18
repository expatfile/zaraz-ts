import { sendQueuedEvents } from './send-queued-events';

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

describe('sendQueuedEvents()', () => {
  it("should not break when the Zaraz consent API hasn't been initialised", () => {
    const sendQueuedEventsMock = jest.fn();
    sendQueuedEvents();
    expect(sendQueuedEventsMock).toHaveBeenCalledTimes(0);
  });

  it('should call sendQueuedEventsMock when the Zaraz consent API has been initialised', () => {
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

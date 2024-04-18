import { getZaraz } from './get-zaraz';

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

const logSpy = jest.spyOn(console, 'log');
const warnSpy = jest.spyOn(console, 'warn');

beforeAll(() => {
  windowObj = window;

  logSpy.mockImplementation();
  warnSpy.mockImplementation();
});

afterAll(() => {
  Object.defineProperty(global, 'window', {
    value: windowObj,
  });

  logSpy.mockRestore();
  warnSpy.mockRestore();
});

describe('getZaraz()', () => {
  it("should return undefined when skipQueue is true and zaraz doesn't exist on the window", () => {
    expect(getZaraz({ skipQueue: true })).toEqual(undefined);
    expect(warnSpy).toHaveBeenCalledWith(
      `[zaraz-ts] Zaraz Web API hasn't been initialized.`,
    );
  });

  it('should return zaraz when it exists on the window', () => {
    window.zaraz = {
      track: trackMock,
      set: setMock,
      ecommerce: ecommerceMock,
    };

    expect(getZaraz()).toEqual({
      track: trackMock,
      set: setMock,
      ecommerce: ecommerceMock,
    });
  });

  it('should queue events when zaraz is not defined', () => {
    window.zaraz = undefined;

    // getZaraz() returns a queue.
    getZaraz().track('page_view', {
      page_location: 'https://example.com',
      page_path: '/',
      page_title: 'Home',
    });

    expect(logSpy).toHaveBeenCalledWith(
      `Zaraz Web API is not initialized. Queueing events...`,
    );

    window.zaraz = {
      track: trackMock,
      set: setMock,
      ecommerce: ecommerceMock,
    };

    // Triggers the flush.
    getZaraz().track('button clicked', { userId: 'ABC-123', value: 200 });

    expect(logSpy).toHaveBeenCalledWith(
      `Zaraz Web API is initialized. Flushing queue...`,
    );

    // Calls the queued events.
    expect(trackMock).toHaveBeenCalledWith('page_view', {
      page_location: 'https://example.com',
      page_path: '/',
      page_title: 'Home',
    });

    // Calls the actual event.
    expect(trackMock).toHaveBeenCalledWith('button clicked', {
      userId: 'ABC-123',
      value: 200,
    });

    expect(logSpy).toHaveBeenCalledWith(`Zaraz Web API queue flushed.`);
  });

  it('should throw when window is not defined', () => {
    // Set window to undefined.
    Object.defineProperty(global, 'window', {
      value: undefined,
    });

    expect(() => getZaraz()).toThrow(
      `Cannot use Zaraz Web API, because window is not defined.`,
    );
  });
});

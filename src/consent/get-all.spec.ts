import { getAll } from './get-all';

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

describe('getAll()', () => {
  it('should return all consents from zaraz consent', () => {
    const consentsMock = { key1: true, key2: false };
    window.zaraz = {
      consent: {
        getAll: jest.fn().mockReturnValue(consentsMock),
      },
    };

    const consents = getAll();

    expect(consents).toEqual(consentsMock);
  });
});

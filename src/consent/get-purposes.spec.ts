import { getPurposes } from './get-purposes';

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

describe('getPurposes()', () => {
  it('should return all purposes from zaraz consent', () => {
    const purposesMock = {
      key1: { name: 'Name 1', description: 'Description 1', order: 1 },
      key2: { name: 'Name 2', description: 'Description 2', order: 2 },
    };
    window.zaraz = {
      consent: {
        purposes: purposesMock,
      },
    };

    const purposes = getPurposes();

    expect(purposes).toEqual(purposesMock);
  });
});

import { getAllCheckboxes } from './get-all-checkboxes';

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

describe('getAllCheckboxes()', () => {
  it('should return all checkboxes from zaraz consent', () => {
    const checkboxesMock = { key1: true, key2: false };
    window.zaraz = {
      consent: {
        getAllCheckboxes: jest.fn().mockReturnValue(checkboxesMock),
      },
    };

    const checkboxes = getAllCheckboxes();

    expect(checkboxes).toEqual(checkboxesMock);
  });
});

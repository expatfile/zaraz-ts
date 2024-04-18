import { getAllCheckboxes } from './get-all-checkboxes';

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

describe('getAllCheckboxes()', () => {
  it("should return an empty object when the Zaraz consent API hasn't been initialised", () => {
    const checkboxes = getAllCheckboxes();
    expect(checkboxes).toEqual({});
  });

  it('should return an object of checkboxes when the Zaraz consent API has been initialised', () => {
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

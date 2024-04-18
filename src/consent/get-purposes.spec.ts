import { getPurposes, Purposes } from './get-purposes';

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

describe('getPurposes()', () => {
  it("should return an empty object when the Zaraz consent API isn't initialised", () => {
    const purposes = getPurposes();
    expect(purposes).toEqual({});
  });

  it('should return an object of purposes from the Zaraz consent API when Zaraz is initialised', () => {
    const purposesMock: Purposes = {
      ORFL: {
        name: { en: 'Name 1' },
        description: { en: 'Description 1' },
        order: 100,
      },
      OAVL: {
        name: { en: 'Name 2' },
        description: { en: 'Description 2' },
        order: 200,
      },
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

import { getZaraz } from '../helpers/get-zaraz';
import { setAllCheckboxes } from './set-all-checkboxes';

jest.mock('../helpers/get-zaraz');

describe('setAllCheckboxes()', () => {
  it('should call setAllCheckboxes method on zaraz consent with the correct argument', () => {
    const setAllCheckboxesMock = jest.fn();
    (getZaraz as jest.Mock).mockReturnValue({
      consent: {
        setAllCheckboxes: setAllCheckboxesMock,
      },
    });

    setAllCheckboxes(true);

    expect(setAllCheckboxesMock).toHaveBeenCalledWith(true);
  });
});

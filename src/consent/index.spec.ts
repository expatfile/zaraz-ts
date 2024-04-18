import * as consentModule from './index';

describe('consent', () => {
  it('should have the expected methods', () => {
    expect(consentModule.consent).toEqual({
      get: expect.any(Function),
      set: expect.any(Function),
      getAll: expect.any(Function),
      setAll: expect.any(Function),
      getAllCheckboxes: expect.any(Function),
      getPurposes: expect.any(Function),
      getAPIReady: expect.any(Function),
      setCheckboxes: expect.any(Function),
      setAllCheckboxes: expect.any(Function),
      sendQueuedEvents: expect.any(Function),
    });
  });
});

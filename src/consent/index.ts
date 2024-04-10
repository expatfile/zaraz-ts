import { get } from './get';
import { getAll } from './get-all';
import { getAllCheckboxes } from './get-all-checkboxes';
import { getPurposes } from './get-purposes';
import { sendQueuedEvents } from './send-queued-events';
import { set } from './set';
import { setAll } from './set-all';
import { setAllCheckboxes } from './set-all-checkboxes';
import { setCheckboxes } from './set-checkboxes';

export const consent = {
  get,
  set,
  getAll,
  setAll,
  getPurposes,
  getAllCheckboxes,
  setCheckboxes,
  setAllCheckboxes,
  sendQueuedEvents,
};

import { getZaraz } from '../helpers/get-zaraz';

/**
 * If some Pageview-based events were not sent due to a lack of consent, they can be sent using this method after consent was granted.
 */
export function sendQueuedEvents(): void {
  getZaraz({ skipQueue: true })?.consent?.sendQueuedEvents();
}

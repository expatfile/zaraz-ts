import { getZaraz } from './helpers/get-zaraz';

export function track(
  eventName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties?: Record<string, any>,
): Promise<void> {
  return getZaraz().track(eventName, properties);
}

import { getZaraz } from './helpers/get-zaraz';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function set(key: string, value: any, options?: any): void {
  getZaraz().set(key, value, options);
}

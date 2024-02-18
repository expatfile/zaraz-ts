import { getZaraz } from './helpers/get-zaraz';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function spaPageview(): void {
  getZaraz().spaPageview();
}

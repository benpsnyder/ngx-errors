import { ErrorOptions } from '../lib/ngxerrors';

export const toArray = (value: ErrorOptions): string[] =>
  Array.isArray(value) ? value : [value];

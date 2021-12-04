import {ErrorOptions} from '../../../../../old/src/ngxerrors';

export const toArray = (value: ErrorOptions): string[] =>
  Array.isArray(value) ? value : [value];

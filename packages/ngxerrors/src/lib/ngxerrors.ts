export function ngxerrors(): string {
  return 'ngxerrors';
}

import { AbstractControl } from '@angular/forms';

export type ErrorOptions = string | string[];

export interface ErrorDetails {
  control: AbstractControl;
  errorName: string;
}

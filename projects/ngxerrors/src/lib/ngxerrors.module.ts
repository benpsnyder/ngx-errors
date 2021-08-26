import { NgModule } from '@angular/core';

import { NgxErrorsDirective } from './ngxerrors.directive';
import { NgxErrorDirective } from './ngxerror.directive';


@NgModule({
  declarations: [NgxErrorsDirective, NgxErrorDirective],
  exports: [NgxErrorsDirective, NgxErrorDirective]
})
export class NgxErrorsModule { }

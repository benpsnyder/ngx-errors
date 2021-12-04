export * from './lib/ngxerrors';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxErrorsDirective } from './directives/ngxerrors.directive';
import { NgxErrorDirective } from './directives/ngxerror.directive';

const dependencies = [NgxErrorsDirective, NgxErrorDirective];

@NgModule({
  declarations: [...dependencies],
  imports: [BrowserModule],
  exports: [...dependencies],
  providers: [],
  bootstrap: [],
})
export class AppModule {}

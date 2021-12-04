import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxErrorsDirective } from './directives/ngxerrors.directive';
import { NgxErrorDirective } from './directives/ngxerror.directive';

const dependencies = [NgxErrorsDirective, NgxErrorDirective];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ...dependencies],
  imports: [BrowserModule],
  exports: [...dependencies],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

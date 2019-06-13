import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LengthModule, LogModule, NotModule } from 'async-pipeline';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NotModule,
    LengthModule,
    LogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

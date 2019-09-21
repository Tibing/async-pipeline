import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  LengthModule,
  NotModule,
  SkipModule,
  IsEmptyModule
} from '../../../async-pipeline/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LengthModule, NotModule, SkipModule, IsEmptyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

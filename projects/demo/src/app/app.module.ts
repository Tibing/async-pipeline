import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LengthModule, NotModule, SkipModule } from 'ngx-async-pipeline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LengthModule,
    NotModule,
    SkipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

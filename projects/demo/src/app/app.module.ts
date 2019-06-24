import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LengthModule, NotModule } from 'ngx-async-pipeline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LengthModule,
    NotModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

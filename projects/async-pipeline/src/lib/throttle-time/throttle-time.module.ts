import { NgModule } from '@angular/core';

import { ThrottleTimePipe } from './throttle-time.pipe';

@NgModule({ declarations: [ThrottleTimePipe], exports: [ThrottleTimePipe] })
export class ThrottleTimeModule {
}

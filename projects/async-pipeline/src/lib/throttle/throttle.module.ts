import { NgModule } from '@angular/core';

import { ThrottlePipe } from './throttle.pipe';

@NgModule({ declarations: [ThrottlePipe], exports: [ThrottlePipe] })
export class ThrottleModule {
}

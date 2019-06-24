import { NgModule } from '@angular/core';

import { DelayPipe } from './delay.pipe';

@NgModule({ declarations: [DelayPipe], exports: [DelayPipe] })
export class DelayModule {
}

import { NgModule } from '@angular/core';

import { NotPipe } from './pipes/not.pipe';
import { LengthPipe } from './pipes/length.pipe';
import { DelayPipe } from './pipes/delay.pipe';

@NgModule({
  declarations: [
    NotPipe,
    LengthPipe,
    DelayPipe,
  ],
})
export class AsyncPipelineModule {
}

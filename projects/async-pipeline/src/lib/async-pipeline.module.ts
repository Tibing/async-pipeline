import { NgModule } from '@angular/core';

import { NotPipe } from './pipes/not.pipe';
import { LengthPipe } from './pipes/length.pipe';
import { DelayPipe } from './pipes/delay.pipe';
import { LogPipe } from './pipes/log.pipe';

@NgModule({
  declarations: [
    NotPipe,
    LengthPipe,
    DelayPipe,
    LogPipe,
  ],
})
export class AsyncPipelineModule {
}

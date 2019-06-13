import { NgModule } from '@angular/core';

import { NotPipe } from './pipes/not.pipe';
import { LengthPipe } from './pipes/length.pipe';

@NgModule({
  declarations: [
    NotPipe,
    LengthPipe,
  ],
})
export class AsyncPipelineModule {
}

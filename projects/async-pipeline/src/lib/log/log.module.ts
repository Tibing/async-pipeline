import { NgModule } from '@angular/core';

import { LogPipe } from './log.pipe';

@NgModule({ declarations: [LogPipe], exports: [LogPipe] })
export class LogModule {
}

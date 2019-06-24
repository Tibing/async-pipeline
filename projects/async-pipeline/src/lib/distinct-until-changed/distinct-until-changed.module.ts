import { NgModule } from '@angular/core';

import { DistinctUntilChangedPipe } from './distinct-until-changed.pipe';

@NgModule({ declarations: [DistinctUntilChangedPipe], exports: [DistinctUntilChangedPipe] })
export class DistinctUntilChangedModule {
}

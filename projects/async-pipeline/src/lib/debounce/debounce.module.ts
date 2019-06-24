import { NgModule } from '@angular/core';

import { DebouncePipe } from './debounce.pipe';

@NgModule({ declarations: [DebouncePipe], exports: [DebouncePipe] })
export class DebounceModule {
}

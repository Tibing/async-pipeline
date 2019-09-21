import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    {{ title$ | skip: 3 | length | not | async }}
    {{ title$ | isEmpty | async }}
    {{ emptyArray$ | isEmpty | async }}
  `
})
export class AppComponent {
  title$ = of('demo');
  emptyArray$ = of();
}

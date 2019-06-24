import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    {{ title$ | length | not | async }}
  `,
})
export class AppComponent {
  title$ = of('demo');
}

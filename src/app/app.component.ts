import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stream$: Observable<{ title: string }> = of(
    { title: 'abc' },
    { title: 'bcd' },
    { title: 'cde' },
    { title: 'def' },
    { title: 'efg' },
    { title: 'fgh' },
  )
    .pipe(
      concatMap(x => of(x).pipe(delay(1000))),
    );
}

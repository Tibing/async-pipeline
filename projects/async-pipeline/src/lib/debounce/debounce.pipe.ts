import { Pipe, PipeTransform } from '@angular/core';
import { Observable, SubscribableOrPromise } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Pipe({ name: 'debounce', pure: true })
export class DebouncePipe<T> implements PipeTransform {

  transform(stream: Observable<T>, durationSelector: (value: T) => SubscribableOrPromise<any>): Observable<T> {
    return stream.pipe(
      debounce(durationSelector),
    );
  }
}


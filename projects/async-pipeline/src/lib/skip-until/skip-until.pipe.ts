import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

@Pipe({ name: 'skipUntil', pure: true })
export class SkipUntilPipe<T> implements PipeTransform {

  transform(stream: Observable<T>, notifier: Observable<any>): Observable<T> {
    return stream.pipe(
      skipUntil(notifier),
    );
  }
}


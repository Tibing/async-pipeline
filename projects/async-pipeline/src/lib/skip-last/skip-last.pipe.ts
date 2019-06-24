import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { skipLast } from 'rxjs/operators';

@Pipe({ name: 'skipLast', pure: true })
export class SkipLastPipe<T> implements PipeTransform {

  transform(stream: Observable<T>, count: number = 0): Observable<T> {
    return stream.pipe(
      skipLast(count),
    );
  }
}


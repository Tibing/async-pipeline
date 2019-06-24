import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { takeLast } from 'rxjs/operators';

@Pipe({ name: 'takeLast', pure: true })
export class TakeLastPipe<T> implements PipeTransform {

  transform(stream: Observable<T>, count: number = 0): Observable<T> {
    return stream.pipe(
      takeLast(count),
    );
  }
}


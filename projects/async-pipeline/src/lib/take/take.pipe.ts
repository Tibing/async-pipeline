import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Pipe({ name: 'take', pure: true })
export class TakePipe<T> implements PipeTransform {

  transform(stream: Observable<T>, count: number = 0): Observable<T> {
    return stream.pipe(
      take(count),
    );
  }
}


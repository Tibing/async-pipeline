import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Pipe({ name: 'delay', pure: true })
export class DelayPipe<T> implements PipeTransform {

  transform(stream: Observable<T>, d: number | Date = 0): Observable<T> {
    return stream.pipe(
      delay(d),
    );
  }
}


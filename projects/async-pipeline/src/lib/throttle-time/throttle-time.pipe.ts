import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Pipe({ name: 'throttleTime', pure: true })
export class ThrottleTimePipe<T> implements PipeTransform {

  transform(stream: Observable<T>, d: number = 0): Observable<T> {
    return stream.pipe(
      throttleTime(d),
    );
  }
}


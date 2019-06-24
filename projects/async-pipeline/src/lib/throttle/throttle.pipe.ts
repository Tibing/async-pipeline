import { Pipe, PipeTransform } from '@angular/core';
import { Observable, SubscribableOrPromise } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Pipe({ name: 'throttle', pure: true })
export class ThrottlePipe<T> implements PipeTransform {

  transform(stream: Observable<T>, durationSelector: (value: T) => SubscribableOrPromise<any>): Observable<T> {
    return stream.pipe(
      throttle(durationSelector),
    );
  }
}


import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Pipe({ name: 'takeUntil', pure: true })
export class TakeUntilPipe<T> implements PipeTransform {

  transform(stream: Observable<T>, notifier: Observable<any>): Observable<T> {
    return stream.pipe(
      takeUntil(notifier),
    );
  }
}


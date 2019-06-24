import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Pipe({ name: 'takeWhile', pure: true })
export class TakeWhilePipe<T> implements PipeTransform {

  transform(stream: Observable<T>, predicate: (value: T, index: number) => boolean): Observable<T> {
    return stream.pipe(
      takeWhile(predicate),
    );
  }
}


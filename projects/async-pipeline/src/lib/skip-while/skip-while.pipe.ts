import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Pipe({ name: 'skipWhile', pure: true })
export class SkipWhilePipe<T> implements PipeTransform {

  transform(stream: Observable<T>, predicate: (value: T, index: number) => boolean): Observable<T> {
    return stream.pipe(
      skipWhile(predicate),
    );
  }
}


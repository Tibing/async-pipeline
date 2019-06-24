import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({ name: 'length', pure: true })
export class LengthPipe<T> implements PipeTransform {

  transform(stream: Observable<T[] | string>): Observable<number> {
    return stream.pipe(
      map((values: T[]) => values.length),
    );
  }
}

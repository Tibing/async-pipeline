import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({ name: 'isEmpty', pure: true })
export class IsEmptyPipe<T> implements PipeTransform {
  transform(stream: Observable<T[] | string>): Observable<boolean> {
    return stream.pipe(map((values: T[] | string) => !!!values.length));
  }
}

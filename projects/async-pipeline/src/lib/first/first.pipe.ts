import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Pipe({ name: 'first', pure: true })
export class FirstPipe<T> implements PipeTransform {

  transform(stream: Observable<T>): Observable<T> {
    return stream.pipe(
      first(),
    );
  }
}


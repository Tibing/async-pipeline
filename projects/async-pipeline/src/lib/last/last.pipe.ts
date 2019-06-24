import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { last } from 'rxjs/operators';

@Pipe({ name: 'last', pure: true })
export class LastPipe<T> implements PipeTransform {

  transform(stream: Observable<T>): Observable<T> {
    return stream.pipe(
      last(),
    );
  }
}


import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Pipe({ name: 'log', pure: true })
export class LogPipe<T> implements PipeTransform {

  transform(stream: Observable<T>): Observable<T> {
    return stream.pipe(
      tap(console.log.bind(console)),
    );
  }
}


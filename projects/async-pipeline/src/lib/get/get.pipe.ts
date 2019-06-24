import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({ name: 'get', pure: true })
export class GetPipe<T> implements PipeTransform {

  transform(stream: Observable<T>, prop: string | number): Observable<T> {
    return stream.pipe(
      map((value: T) => value[prop]),
    );
  }
}


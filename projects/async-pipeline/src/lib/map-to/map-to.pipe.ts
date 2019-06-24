import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Pipe({ name: 'mapTo', pure: true })
export class MapToPipe<T, R> implements PipeTransform {

  transform(stream: Observable<T>, value: R): Observable<R> {
    return stream.pipe(
      mapTo(value),
    );
  }
}


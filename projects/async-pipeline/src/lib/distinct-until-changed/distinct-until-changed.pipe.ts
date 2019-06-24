import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Pipe({ name: 'distinctUntilChanged', pure: true })
export class DistinctUntilChangedPipe<T> implements PipeTransform {

  transform(stream: Observable<T>, compare?: (x: T, y: T) => boolean): Observable<T> {
    return stream.pipe(
      distinctUntilChanged(compare),
    );
  }
}


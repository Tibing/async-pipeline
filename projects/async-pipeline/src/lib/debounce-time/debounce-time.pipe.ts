import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Pipe({ name: 'debounceTime', pure: true })
export class DebounceTimePipe<T> implements PipeTransform {

  transform(stream: Observable<T>, d: number = 0): Observable<T> {
    return stream.pipe(
      debounceTime(d),
    );
  }
}


import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

@Pipe({ name: 'skip', pure: true })
export class SkipPipe<T> implements PipeTransform {

  transform(stream: Observable<T>, count: number = 0): Observable<T> {
    return stream.pipe(
      skip(count),
    );
  }
}


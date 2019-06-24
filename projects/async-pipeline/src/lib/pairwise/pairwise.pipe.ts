import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { pairwise } from 'rxjs/operators';

@Pipe({ name: 'pairwise', pure: true })
export class PairwisePipe<T> implements PipeTransform {

  transform(stream: Observable<T>): Observable<[T, T]> {
    return stream.pipe(
      pairwise(),
    );
  }
}


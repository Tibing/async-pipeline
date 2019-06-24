import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({ name: 'not', pure: true })
export class NotPipe implements PipeTransform {

  transform(stream: Observable<boolean | number>): Observable<boolean> {
    return stream.pipe(
      map((value: boolean | number) => !value),
    );
  }
}


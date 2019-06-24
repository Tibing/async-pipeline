# AsyncPipeline

## Do you still use streams in an old fashioned way? 🧐

![alt text](assets/old-way.png)

Async pipeline introduces a brand new way to use streams in Angular templates.
We bring genuine and custom **RxJS** operators in Angular templates templates! 🔥

![alt text](assets/new-way.png)

## Getting started

- `npm i ngx-async-pipeline`
- Import required modules:
```
import { NotModule, LengthModule } from 'ngx-async-pipeline';

@NgModule({
  imports: [
    NotModule,
    LengthModule,
  ],
})
export class AppModule {}
```

- Use pipe
```
<app-errors *ngIf="errors$ | length | not | async></app-errors>
```

- Be awesome 🌈

## Available pipes

### Custom
- length
- log
- not
- get

### RxJS
- debounce
- debounce-time
- delay
- distinct-until-changed
- first
- last
- map-to
- pairwise
- skip
- skip-last
- skip-until
- skip-while
- take
- take-last
- take-until
- take-while
- throttle
- throttle-time

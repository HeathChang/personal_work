//tap
import {of, tap} from "rxjs";
import {filter, map} from "rxjs/operators";


of(1, 7, 3, 6, 2)
    .pipe(
        filter(value => value > 5),
        tap({
            next: value => console.log('spy:: ',value)
        }),
        map(value => 2 * value)
    )
    .subscribe(value => console.log('output: ', value))

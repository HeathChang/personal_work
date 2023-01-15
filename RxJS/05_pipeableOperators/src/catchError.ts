//catch Error
import {catchError, EMPTY, Observable, of} from "rxjs";

const failingHttpRequest$ = new Observable((subscriber: any) => {
        setTimeout(() => {
            subscriber.error(new Error('Time Out'))
        }, 3000)
    }
)
failingHttpRequest$
    .pipe(
        catchError(error => EMPTY)
    )
    .subscribe({
        next: value => console.log(value),
        complete: () => console.log('completed.'),
    })




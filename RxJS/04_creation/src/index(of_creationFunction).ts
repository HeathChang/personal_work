import {Observable, of} from 'rxjs';

// of('Alice','Ben','Charlie').subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('Completed')
// });

// const name$ = new Observable<string>(subscriber => {
//     subscriber.next('Alice');
//     subscriber.next('Ben');
//     subscriber.next('Charlie');
//     subscriber.complete();
//     })
//
// name$.subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('Completed')
// });

// sample of how creation function work
// let ourOwnOf = (...args: string[]) => {
//     return new Observable<string>(subscriber => {
//         for (let i = 0 ; i < args.length; i++){
//             subscriber.next(args[i])
//         }
//         subscriber.complete();
//     })
// }
ourOwnOf('Alice','Ben','Charlie').subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
});

function ourOwnOf (...args: string[]):Observable<string> {
    return new Observable<string>(subscriber => {
        for (let i = 0; i < args.length; i++) {
            subscriber.next(args[i])
        }
        subscriber.complete();
    })
}
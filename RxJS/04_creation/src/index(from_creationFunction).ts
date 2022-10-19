// From Creation Function:: Convert an array into an Observable.
import {from} from 'rxjs';

// Basic Array using from cf.
// from(['Alice','Ben','Charlie']).subscribe(  {
//     next: value => console.log(value),
//     complete: () => console.log('Completed')
// });


//From CF using promise
const somePromise = new Promise((resolve, reject) => {
    // resolve('Resolved')
    reject('Rejected')
})

const observableFromPromise$ = from(somePromise);
observableFromPromise$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed'),
    error: (err) => console.log(err)
});
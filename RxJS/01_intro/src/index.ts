import {Observable} from 'rxjs';

// const someObservable$ = new Observable<string>(subscriber => {
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   subscriber.next('Charlie');
//   subscriber.complete();
// });
//
// someObservable$.subscribe(value => console.log(value));


// 1. Define Observable
const observable$ = new Observable<string>(subscriber => {
    console.log('Observable executed')
    subscriber.next('Heath');
    subscriber.next('Jeff');
    //next code wont work, because of unsubscription.
    setTimeout(() => subscriber.next('Star'), 4000);
})
// 2. create Observer Obj
const observer = {
    next: (value: string) => console.log(value)
}

// 3. subscription
// observable$.subscribe(observer);
// const subscription = observable$.subscribe((value: string) => console.log(value));
observable$.subscribe((value: string) => console.log(value));
setTimeout(() => {
    observable$.subscribe((value: string) => console.log(value));
}, 1000)

// 4. unsubscribe
// setTimeout(()=>{
//     console.log('un-subscription:::')
//     subscription.unsubscribe(),3000
// })


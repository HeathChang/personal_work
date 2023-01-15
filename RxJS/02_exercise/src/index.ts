import {Observable} from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout(() => subscriber.error(new Error('Fail Hello')), 2000)

    setTimeout(() => {
        subscriber.next('Charlie');
        subscriber.complete();
    }, 3000);

    // Tear-Down logic can be used by Observable to clean up after itself to prevent memory leaks or to provide cancellation logic

    return () => {
        console.log('Tear Down Logic will occur')
    }
});

const interval$ = new Observable<number>(subscriber => {
    let counter = 1;
    const intervalId = setInterval(() => {
        console.log('Emmited::: ', counter)
        subscriber.next(counter++);
    }, 2000)

    // if , this teardown logic is null, the code inside  the observable is still running => no more code/ memory leak
    return () => {
        clearInterval(intervalId)
        console.log('Tear Down Logic will occur')
    }
})


// observable$.subscribe((value: string) => console.log(value));
// observable$.subscribe({
//     next: (value:string) => console.log('Next:: ', value),
//     complete: () => console.log('complete:::'),
//     error: (error: any) => console.log('Error:::: ', error.message)
//     // complete: (value:string) => console.log('Complete:: ', value)
// });

const subscription = interval$.subscribe({
    next: (value: number) => console.log('Next:: ', value),
    complete: () => console.log('complete:::'),
    error: (error: any) => console.log('Error:::: ', error.message)
});

setTimeout(() => {
    console.log('unsubscribe::')
    subscription.unsubscribe()
}, 6000)

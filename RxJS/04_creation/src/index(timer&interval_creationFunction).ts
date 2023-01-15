import {interval, Observable, timer} from 'rxjs'
// Timeout==========================================================
// timer(2000).subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('completed! ')
// })

// const timer$ = new Observable<number>(subscriber => {
//     const timer = setTimeout(()=>{
//         console.log('hello')
//         subscriber.next(0)
//         subscriber.complete()
//     }, 2000)
//     return ()=> clearTimeout(timer)
// })
//
// const subscription = timer$.subscribe({
//     next: value => console.log(value),
//     complete: () => console.log()
// })
//
// setTimeout(()=>{
//     subscription.unsubscribe()
// },1000)


// INTERVAL==========================================================
// const subscription = interval(1000).subscribe({
//     next: value => console.log(value),
//     complete: () => console.log()
// })
//


const interval$ = new Observable<number>(subscriber => {
    let counter = 0
    const timer = setInterval(() => {
        subscriber.next(counter++)
    }, 1000)
    return () => clearInterval(timer)
})

const subscription = interval$.subscribe({
    next: value => console.log(value),
    complete: () => console.log()
})


setTimeout(() => {
    subscription.unsubscribe();
}, 3000)
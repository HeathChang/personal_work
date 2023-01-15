//fromEvent Creation Function
import {fromEvent, Observable} from 'rxjs';

const triggerButton = document.querySelector("Button#trigger")

// const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
//     event => console.log(event.type, event.x, event.y)
// )
// setTimeout(()=>{
//     console.log('unsubscribe')
//     subscription.unsubscribe()
// },3000)


const triggerClick$ = new Observable<MouseEvent>(subscriber => {
    const clickHandlerFn = (event: MouseEvent) => {
        subscriber.next(event);
    }
    triggerButton.addEventListener('click', clickHandlerFn)

    return () => {
        triggerButton.removeEventListener('click', clickHandlerFn)
    }
})
const subscription = triggerClick$.subscribe({
    next: event => console.log(event.type, event.x, event.y)
})
setTimeout(() => {
    console.log('unsubscribe')
    subscription.unsubscribe()
}, 3000)
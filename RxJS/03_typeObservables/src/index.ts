//HOT Observables.
import {Observable} from 'rxjs';

const helloButton = document.querySelector('button#hello')
const helloClickbservable$ = new Observable<MouseEvent>(subscriber => {
    helloButton.addEventListener('click', (event: any) => {
        subscriber.next(event)
    })
});

helloClickbservable$.subscribe((event: any) => console.log('sub1::',event.type, event.x, event.y));
setTimeout(()=>{
    console.log('sub2 start')
    helloClickbservable$.subscribe((event: any) => console.log('sub2:',event.type, event.x, event.y));

},2000)
//=> multi-casting
//=> Each Time click, Observable is run for the first subscription which means that a new click event listener is added to our hello button and each event will be emitted.
//=> as the next notification to the Observer provided for the first subsßcription.

// Cold Observables
// import {ajax} from "rxjs/ajax";
//
// const ajax$ =  ajax<any>("https://random-data-api.com/api/v2//beers");
//
// ajax$.subscribe(
//     data => console.log('subscribe1::' + data.response.name)
// )
// ajax$.subscribe(
//     data => console.log('subscribe2::' + data.response.name)
// )
// ajax$.subscribe(
//     data => console.log('subscribe3::' + data.response.name)
// )
// Produced a new source of emissions, namely a new HTTP request for each subscription.



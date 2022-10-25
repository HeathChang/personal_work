// concatMap
import {concatMap, Observable, of} from "rxjs";

const source$ = new Observable( subscriber => {
    setTimeout(()=> subscriber.next('A'),1000)
    setTimeout(()=> subscriber.next('A'),2000)
})

console.log(' App has started ')
source$
    .pipe(concatMap( value => of(1,2)))
    .subscribe( value => console.log(value))
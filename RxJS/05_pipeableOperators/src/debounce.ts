import {debounceTime, fromEvent} from "rxjs";
import {map} from "rxjs/operators";

const sliderInput = document.querySelector('input#slider');

fromEvent(
    sliderInput, 'input'
)
    .pipe(
        debounceTime(2000),
        map((event: any) => event.target['value'])
    )
    .subscribe(
        value => console.log(value)
    )

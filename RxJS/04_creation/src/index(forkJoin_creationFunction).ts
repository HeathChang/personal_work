// forkJoin
import {forkJoin, Observable} from "rxjs";
import {ajax } from "rxjs/ajax";

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');
const randomNation$ = ajax('https://random-data-api.com/api/nation/random_nation');
const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe((ajaxResponse:any) => console.log(1,ajaxResponse.response.first_name))
// randomNation$.subscribe((ajaxResponse:any) => console.log(2,ajaxResponse.response.capital))
// randomFood$.subscribe((ajaxResponse:any) => console.log(3,ajaxResponse.response.dish))
// => orders not always same

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
    ([nameAjax, nationAjax, foodAjax]: any) => console.log(`${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}`)
)


const a$ = new Observable((subscriber: any) => {
    setTimeout(() => {
        subscriber.next('A');
        subscriber.complete();
    }, 5000);

    return () => {
        console.log('A teardown');
    };
});

const b$ = new Observable((subscriber: any)  => {
    setTimeout(() => {
        subscriber.error('Failure!');
    }, 3000);

    return () => {
        console.log('B teardown');
    };
});
//  if the Observable A would be a real HTTP call ,
//  it would get cancelled if any of the forkJoin's input Observables would fail.
forkJoin([a$, b$]).subscribe({
    next: value => console.log(value),
    error: err => console.log('Error:', err)
});

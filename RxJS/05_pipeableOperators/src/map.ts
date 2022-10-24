// map
import {forkJoin, Observable} from "rxjs";
import {ajax} from "rxjs/ajax";
import {map} from "rxjs/operators"

const randomFirstName$ = ajax('https://random-data-api.com/api/name/random_name').pipe(
    map((ajaxResponse: any) => ajaxResponse.response.first_name)
);
const randomCapitial$ = ajax('https://random-data-api.com/api/nation/random_nation').pipe(
    map((ajaxResponse: any) => ajaxResponse.response.captial)
);
const randomDish$ = ajax('https://random-data-api.com/api/food/random_food').pipe(
    map((ajaxResponse: any) => ajaxResponse.response.dish)
);

forkJoin([randomFirstName$, randomCapitial$, randomDish$]).subscribe(
    ([name, nation, food]: any) => console.log(`${name} is from ${nation} and likes to eat ${food}`)
)
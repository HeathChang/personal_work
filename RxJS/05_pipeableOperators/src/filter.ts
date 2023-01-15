// Filter Operator

import {Observable} from "rxjs";
import {filter} from 'rxjs/operators';

interface NewsItem {
    category: 'Business' | 'Sports';
    content: string
}

const newsFeed$ = new Observable<NewsItem>(subscriber => {
    setTimeout(() =>
        subscriber.next({category: 'Business', content: 'A'}), 1000
    )
    setTimeout(() =>
        subscriber.next({category: 'Sports', content: 'B'}), 2000
    )
    setTimeout(() =>
        subscriber.next({category: 'Business', content: 'C'}), 3000
    )
    setTimeout(() =>
        subscriber.next({category: 'Sports', content: 'C'}), 4000
    )
    setTimeout(() =>
        subscriber.next({category: 'Business', content: 'C'}), 5000
    )
})

// new: using Filter
// Pipeable Operator, takes what it has above as that input.
newsFeed$
    .pipe(
        filter((item) => item.category === 'Sports'))
    .pipe(
        filter((item) => item.content === ' '))
    .subscribe(
        item => console.log(item)
    )

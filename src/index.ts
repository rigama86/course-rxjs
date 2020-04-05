import { interval, timer } from 'rxjs';

const observer = {
     next: val => console.log('next: ' ,val),
     complete: () => console.log('complete')
}

const intervale$ = interval(1000);
const time$ = timer(2000);

console.log('Start');
//intervale$.subscribe(  observer );
time$.subscribe( observer );
console.log("Finish");
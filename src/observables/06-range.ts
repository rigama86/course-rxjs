import {range, asyncScheduler } from 'rxjs';

const src$ = range (1,4, asyncScheduler);

console.log('Start');
src$.subscribe( console.log );
console.log("finished");
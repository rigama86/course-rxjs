import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log( 'next [next]: ', value),
    error: error => console.warn( 'error [obs]: ', error),
    complete: () => console.info( 'complete [obs]' )
};

const intervalo$ = new Observable<number>( subscriber => {
    let count = 0;
    const interval = setInterval( () => {
        count++;         
        subscriber.next(count);
        console.log(count);
    }, 1000);

    setTimeout( ()=> {
        subscriber.complete();
    }, 2500 );

    return () => {
        clearInterval(interval);
        console.log('Destroyed interval');
    }
}); 

// const subs1 = intervalo$.subscribe ( num => console.log( 'Num: ', num ) );
// const subs2 = intervalo$.subscribe ( num => console.log( 'Num: ', num ) );
// const subs3 = intervalo$.subscribe ( num => console.log( 'Num: ', num ) );

const subs1 = intervalo$.subscribe();
const subs2 = intervalo$.subscribe();
const subs3 = intervalo$.subscribe();

// setTimeout(() => {
//     subs1.unsubscribe();
//     subs2.unsubscribe();
//     subs3.unsubscribe();
//     console.log('Complete timeout.');
// }, 3000);

subs1.add( subs2 )
     .add( subs3 );

setTimeout(() => {
    subs1.unsubscribe();
    console.log('Complete timeout.');
}, 3000);

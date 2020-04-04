import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log( 'next [next]: ', value),
    error: error => console.warn( 'error [obs]: ', error),
    complete: () => console.info( 'complete [obs]' )
};

const intervalo$ = new Observable<number>( subs => {
    const intervalID = setInterval( 
        () => subs.next( Math.random() ), 4000 
    );
    return () => clearInterval( intervalID );
    console.log('Intervalo destruido');
} );

const subject$ = new Subject();
intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe( console.log );
// const subs2 = intervalo$.subscribe( console.log );

const subs1 = subject$.subscribe( rnd => console.log('subs1: ', rnd) );
const subs2 = subject$.subscribe( rnd => console.log('subs2: ', rnd) );
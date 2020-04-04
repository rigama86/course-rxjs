import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log( 'next [next]: ', value),
    error: error => console.warn( 'error [obs]: ', error),
    complete: () => console.info( 'complete [obs]' )
};

//const obs$ = Observable.create();
const obs$ = new Observable( subs => {
    subs.next('hi');
    subs.next('world');
    subs.complete();
    subs.next('Richard');
} );

//obs$.subscribe( resp => { console.log(resp) } );
//obs$.subscribe ( console.log );

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Complete')
// );


obs$.subscribe( observer );
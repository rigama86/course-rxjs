import { of, fromEvent } from 'rxjs';

/**
 * Eventos de DOM
*/

const src1$ = fromEvent<MouseEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const observer = {
    next: val => console.log('next', val)
};

src1$.subscribe( ({ x, y}) => {
    console.log ( 'point: ' + x + ", " + y);
});

src2$.subscribe( event => {
    console.log( 'Press: ' + event.key );
} );

import { range,from, fromEvent } from 'rxjs';
import { filter , pluck, map} from 'rxjs/operators';

// range(1,10).pipe(
//     filter(val => val%2===1)
// ).subscribe(console.log);

interface Personaje{
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] =  [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

const heroe$ = from(personajes).pipe(
    filter( personaje => personaje.tipo === 'heroe')
);
heroe$.subscribe(console.log);

//const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').map( event, event.code);

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map(event => event.code ),
    filter( key => key === "Enter" ),
);

keyup$.subscribe( console.log );
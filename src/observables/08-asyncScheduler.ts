import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000 );
// setInterval(() => {}, 3000 );

const greet = () => console.log('Hi world');
const greet2 = name => console.log(`Hi ${{ name }}`);

// asyncScheduler.schedule( greet, 2000 );
// asyncScheduler.schedule( greet2, 2000, 'Richard' );

const subs = asyncScheduler.schedule( function(state) {
    console.log('state', state);
    this.schedule( state + 1, 1000 );
}, 3000, 0 );

asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000 );
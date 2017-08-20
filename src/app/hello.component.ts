import { Component } from '@angular/core';

export const A = 1;
export const B = 2;

const c = () => {};

let d = {title: 'hi man'};

setTimeout(()=>{
    console.log('d now is change to ', d);
}, 1000);

export { c, A as a , B as b, d}; 

export default function () {
    console.log( 'default function' );
}

@Component({
    selector: 'hello',
    template: 'hello world'
})
export class HelloComponent {
    
}

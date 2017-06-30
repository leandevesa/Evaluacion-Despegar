import { Pipe } from '@angular/core';

@Pipe({
  name: 'forNumber'
})
export class ForNumberPipe {

  transform(value) {

    return (new Array(value)).fill(1);
  }
}

@Pipe({
  name: 'forNumberWithNumbers'
})
export class ForNumberWithNumbersPipe {

  transform(value) {

    var array = [];

    for (var i = 1; i <= value; i++) {
      
      array.push(i);
    }
    
    return array;
  }
}
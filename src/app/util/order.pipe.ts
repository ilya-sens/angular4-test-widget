import {Pipe, PipeTransform} from '@angular/core';
import {orderBy} from 'lodash';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array, value, dummy) {
    console.log(dummy);
    return orderBy(array, value);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { TransactionInt } from '../models/transaction';

@Pipe({
  name: 'filterTipe'
})
export class FilterTipePipe implements PipeTransform {

  transform(data: TransactionInt[], search: string): TransactionInt[] {
    return data.filter(t => t.type.includes(search));
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, term: any): any {
    //check if search term is undefined
    if (value === undefined) return value;
    // return updated value
    return value.filter((val) => {
      return val.name.toLowerCase().includes(term.toLowerCase());
    });
  }
}

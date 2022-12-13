import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {

    return list ? list.filter(item =>
      item.nomJoueur.toLocaleLowerCase().includes(filterText)):[];
  }

}

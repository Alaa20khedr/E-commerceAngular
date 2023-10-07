import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtitle'
})
export class AddtitlePipe implements PipeTransform {

  transform(products:any[] ,searchval:string): any[] {
    return products.filter((val)=>{
      return val.title.toLowerCase().includes(searchval.toLowerCase())
    });
  }

}

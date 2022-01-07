import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restfilter'
})
export class RestfilterPipe implements PipeTransform {

  transform(val: any, FindTerm:any): any {
    if(val.length ===0){
      return val
    }
    
    return val.filter(function(find: any){
      return find.restname.toLowerCase().indexOf(FindTerm.toLowerCase())> -1
    })
      
    };

}

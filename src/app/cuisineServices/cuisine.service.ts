import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {

  constructor(public http: HttpClient) { 

  }
  // getdata(){
    
  //   let aurl ="http://localhost:8080//menu/all";
  //   return this.http.get(aurl);
  // }
  // cart(cart: any){
  //   return this.http.post<Cart> ('http://localhost:8080/cart', cart);
  // }
 getdata(){
   return this.http.get<any>("http://localhost:8080//menu/all")
   .pipe(map((res : any)=>{
     return res;
   }))
 }


}


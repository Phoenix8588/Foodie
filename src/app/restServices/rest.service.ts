import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) {

   }
   getRestdata(){
    let resturl = "http://localhost:8080//restaurant/all";
    return this.http.get(resturl);
   }
}

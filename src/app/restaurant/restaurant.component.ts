import { Component, OnInit } from '@angular/core';
import { RestService } from '../restServices/rest.service';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  rest:any=[];
  constructor(private rest1: RestService){
     this.rest1.getRestdata().subscribe(restdata=>{

       console.log(restdata)
       this.rest = restdata;
     });
    
  }

  ngOnInit(): void {
    document.body.classList.add('selector2');
  }
  ngOnDestroy(){
    document.body.classList.remove('selector2');
  }
 findName: String ='';
}

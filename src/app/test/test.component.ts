import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartServices/cart.service';
import { CuisineService } from '../cuisineServices/cuisine.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public data:any;
  // data:any=[];
  nameSearch:String = '';
  constructor(private cuisine: CuisineService, private cartService: CartService){
   
  }
 

  ngOnInit(): void {
    document.body.classList.add('selector2');
    this.cuisine.getdata().subscribe(cuisinedata=>{

      
      this.data = cuisinedata;
      // this.data.map((d:any)=>d.qty=0)
      this.data.forEach((a:any) => {
        Object.assign(a,{qty:1,total:a.menuprice});
        
      });
      
      console.log(this.data)
    });
  }
  ngOnDestroy(){
    document.body.classList.remove('selector2');
  }
 

  addtocart(item : any){
    if(item.qty >0 ){

      this.cartService.addtoCart(item);
    }

  }
}


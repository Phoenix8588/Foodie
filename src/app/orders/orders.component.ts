import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartServices/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  
  constructor(private cartService : CartService) { }
 
 
  ngOnInit(): void {
    
    document.body.classList.add('selector');
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      
    })
    
  }
  ngOnDestroy(){
    document.body.classList.remove('selector');
  }
  

}

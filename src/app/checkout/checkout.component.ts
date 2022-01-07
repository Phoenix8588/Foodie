
import { Component, OnInit } from '@angular/core';

import { CartService } from '../cartServices/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
 
  public products: any = [];
  public grandTotal!: number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    document.body.classList.add('selector');
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
 
  onSubmit(data: any){
    console.warn(data);
  }
  ngOnDestroy(){
    document.body.classList.remove('selector');
  }
}

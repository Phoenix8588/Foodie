import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public data = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.data.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.data.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.data.next(this.cartItemList);
    this.getTotalPrice();
    
    console.log(this.cartItemList)
  }
  
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  // removeCartItem(product: any){
  //   this.cartItemList.map((a:any, index:any)=>{
  //     if(product.id=== a.id){
  //       this.cartItemList.splice(index,1);
  //     }
  //   })
  //   this.data.next(this.cartItemList);
  // }

  removeCartItem(product: any){
     
        this.cartItemList.splice(product.id,1);
        this.data.next(this.cartItemList);
     
  }
   
  

  removeAllCart(){
    this.cartItemList = []
    this.data.next(this.cartItemList);
  }
  
}
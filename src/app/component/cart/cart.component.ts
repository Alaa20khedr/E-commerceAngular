

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit{
  cartDetails:any=null
constructor(private _CartService:CartService){}
removeItem(id:string){
  this._CartService.removeCartItem(id).subscribe({
    next:(response)=>{
      console.log(response.data)
     this.cartDetails=response.data
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
upateCount( id:string ,count:number){
  this._CartService.updateCartItem(id,count).subscribe({
    next:(response)=>{
      console.log(response.data)
     this.cartDetails=response.data
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
ngOnInit(): void {
 this. getUserCart() 
}
getUserCart(){
  this._CartService.getloggedCart().subscribe({
    next:(response)=>{
      console.log(response.data)
     this.cartDetails=response.data
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}

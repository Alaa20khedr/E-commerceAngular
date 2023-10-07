import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

 cartNumber=new BehaviorSubject(0)

  
constructor(private _HttpClient:HttpClient){
  this.getloggedCart().subscribe({
    next:(response)=>{
      this.cartNumber.next(response.numOfCartItems)
      console.log(response)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
addtoCart(id:string):Observable<any>{
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{
  productId:id}
  
)
}
getloggedCart():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart'
    
  )
  }
removeCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
      
      
    )
    }
    updateCartItem(id:string,count:number):Observable<any>{
      return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{

       count:count}
  
)
      
    }


    handlePayment(id:string,shippingAddress:any):Observable<any>{
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{
        shippingAddress:shippingAddress
      }
     )
    }
  }
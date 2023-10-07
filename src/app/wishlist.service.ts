import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  [x: string]: any;
 
  constructor(private _httpclient:HttpClient) { }

  addTowishlist(id:string):Observable<any>{
return this._httpclient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
  productId:id
})
  }
  getloggedwishlist():Observable<any>{
    return this._httpclient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`)
      }
     removefromwishlist(id:string):Observable<any>{
        return this._httpclient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`)
          }
        
}

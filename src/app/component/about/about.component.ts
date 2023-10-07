import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { DataService } from 'src/app/data.service';
import { WishlistService } from 'src/app/wishlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  products:any[]=[]
  inputvalue:string=''
  constructor(private _DataService:DataService, private _CartService:CartService,private _wishlist:WishlistService){ 
    this. dataFromproduct()}



    dataFromproduct(){
      this._DataService.getData("products").subscribe((response)=>{
       this.products=response.data
       console.log(response)
      })
}


addtocart(id:string){
  return this._CartService.addtoCart(id).subscribe({
    next:(response)=>{
      console.log(response)
      if(response.status=='success'){
     this._CartService.cartNumber.next(response.numOfCartItems)
        Swal.fire({
          icon: 'success',
          title: '',
          text: response.message,
         
        })
      
      }
    },
    error:(err)=>{
console.log(err)
    }
  })
}
addtowish(id:string){
  this._wishlist.addTowishlist(id).subscribe((response)=>{
    console.log(response)
    if(response.status=='success'){
    
      Swal.fire({
        icon: 'success',
        title: '',
        text: response.message,
       
      })
    }
  })
}
}
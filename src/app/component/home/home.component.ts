import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/cart.service';
import Swal from 'sweetalert2';
import { WishlistService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  wish:any=false
category:any[]=[]
products:any[]=[]
brand:any[]=[]
inputvalue:string=''
constructor(private _DataService:DataService, private _CartService:CartService ,private _wishlist:WishlistService){ 
  this.dataFromCat()
  this.dataFromproduct()
  this. dataFrombrand()
}
dataFromCat(){
  this._DataService.getData("categories").subscribe((response)=>{
   this.category=response.data
   console.log(response)
  })
}
  dataFromproduct(){
    this._DataService.getData("products").subscribe((response)=>{
     this.products=response.data.slice(0,8)
     console.log(response)
    })
  }
  
  dataFrombrand(){
    this._DataService.getData("brands").subscribe((response)=>{
     this.brand=response.data.slice(0,4)
     console.log(response)
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
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
        this.wish=true
        Swal.fire({
          icon: 'success',
          title: '',
          text: response.message,
         
        })
    
      }
    })
  }
 
}


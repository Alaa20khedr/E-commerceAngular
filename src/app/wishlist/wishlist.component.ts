import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent  implements OnInit{
  wishlist:any=''
  constructor(private _wishlist:WishlistService){

  }

ngOnInit(): void {
 this.getloggedwish()  
}

getloggedwish(){
  this._wishlist.getloggedwishlist().subscribe({
    next:(response)=>{
      this. wishlist=response.data
      console.log(response.data)
    },
    error:(err)=>{
      console.log(err)
    }
  }
   
   
  )
}
removefromwishlist(id:string){
  this._wishlist.removefromwishlist(id).subscribe({
    next:(response)=>{console.log(response)
      this. wishlist=response.data},
    error:(err)=>{console.log(err)}
  })
}

}

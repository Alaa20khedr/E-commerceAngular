import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogin:boolean=false
  cartNum:number=0
constructor(private _auth:AuthService,private _cart:CartService){
_cart.cartNumber.subscribe({
  next:(res)=>{
    console.log(res)
   this.cartNum=res
  },
  error:(err)=>{
    console.log(err)
  }
})




  this._auth.user.subscribe(()=>{
    if (_auth.user.getValue() !==null){
      this. isLogin=true
     }else{
       this. isLogin=false
     }
  })
}
logOT(){
  this._auth.logout()
}
}

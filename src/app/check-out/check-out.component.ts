import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent  implements OnInit{
productid:string=''
  constructor(private _cartservise:CartService) {}
  payment:FormGroup=new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null)
  })
ngOnInit(): void {
    this._cartservise.getloggedCart().subscribe({
      next:(res)=>{
this.productid=res.data._id
       
      }

    })
}
navigatePayment(url:string){
  window.location.href=url
}
paymentfun(payment:FormGroup){
  
  this._cartservise.handlePayment(this.productid,payment.value).subscribe({
    next:(res)=>{
      console.log(res.session.url)
      if(res.status=='success'){
       this.navigatePayment(res.session.url)
       }
    },
    error:(err)=>{
      console.log(err)
    }
  })
}

}

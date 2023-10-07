import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  successMessage:string=''
  errorMessage:string=''
constructor(private _auth:AuthService , private _route:Router){}
forgetForm:FormGroup=new FormGroup({
   email:new FormControl(null,[Validators.required,Validators.email])
})

verifyForm:FormGroup=new FormGroup({
resetCode:new FormControl(null,[Validators.required])
})

forgotPassword(forgetForm:FormGroup){
  console.log(forgetForm.value)
  this._auth.forgetPassword(forgetForm.value).subscribe({
    next:(response)=>{
      this.successMessage=response.message
      this.errorMessage=''
      document.querySelector('.forgotPass')?.classList.add('d-none')
      document.querySelector('.verifycode')?.classList.remove('d-none')
    },
    error:(err)=>{

      this.errorMessage=err.error.message
    }
  })
}


verifycode(verifyForm:FormGroup){
 console.log(verifyForm)
 this._auth.verifyCode(verifyForm.value).subscribe({
  next:(response)=>{
    console.log(response)
    if(response.status=='Success'){
this._route.navigate(['/resetcode'])
    }
  },
  error:(err)=>{
    console.log(err)
  }
 })
}


}

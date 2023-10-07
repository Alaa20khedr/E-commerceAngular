import { Component } from '@angular/core';
import{ FormGroup ,FormControl,Validators} from '@angular/forms'

import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

constructor(private _AuthService:AuthService ,private _Router:Router){}
isLoading:boolean=false
apiError:string=''
registerForm:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3) ,Validators.maxLength(10)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required ,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
  rePassword:new FormControl(null,[Validators.required ,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
  phone:new FormControl(null,[Validators.required,Validators.pattern('^01[0125][0-9]{8}')])
},{validators:this.RepasswordMatch})

handleRegister(formData:FormGroup){
  this.isLoading=true
 if(formData.valid){
  this._AuthService.register(formData.value).subscribe({
    
    next:(data)=>{
    
      if(data.message=='success'){
        this.isLoading=false
        this._Router.navigate(['/login'])
      }
    },
    error:(err)=>{
      this.isLoading=false
   this.apiError=err.error.message
    }
  })
 }
}
RepasswordMatch(form:any){
  let password=form.get('password')
  let rePassword=form.get('rePassword')
  if(password.value===rePassword.value){
    return null
  }else{
    rePassword.setErrors({RepasswordMatch:"Repassword donet match"})
    return({RepasswordMatch:"Repassword donet match"})
  }

}

}



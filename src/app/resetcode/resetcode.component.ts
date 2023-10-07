import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-resetcode',
  templateUrl: './resetcode.component.html',
  styleUrls: ['./resetcode.component.css']
})
export class ResetcodeComponent {

  
  constructor(private _AuthService:AuthService ,private _Router:Router){}
  isLoading:boolean=false
  apiError:string=''

  ResetForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    newpassword:new FormControl(null,[Validators.required ,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
    
  })
  
  resetpass(formData:FormGroup){
    this.isLoading=true
    console.log(formData)
    this._AuthService.resetPassword(formData.value).subscribe({
      next:(response)=>{
        console.log(response)
        this.isLoading=false
        if(response.token){
          this._Router.navigate(['/login'])
        }
      },
      error:(err)=>{
        this.isLoading=false
        console.log(err)
        this.apiError=err.error.message
      }
    })
  
  }
}

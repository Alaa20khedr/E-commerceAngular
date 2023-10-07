import { Component } from '@angular/core';
import{ FormGroup ,FormControl,Validators} from '@angular/forms'
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
constructor(private _AuthService:AuthService ,private _Router:Router){}
isLoading:boolean=false
apiError:string=''
loginForm:FormGroup=new FormGroup({
 
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required ,Validators.pattern('^[A-Z][a-z][0-9]{4,8}')]),
  
})

handleLogin(formData:FormGroup){
  this.isLoading=true
  if(formData.valid){
  
    this._AuthService.login(formData.value).subscribe({
      next:(data)=>{
        if(data.message=='success'){
          localStorage.setItem('userData',data.token)
this._AuthService.decodedData()
          this.isLoading=false
          this._Router.navigate(['/home'])
        }
      },
      error:(err)=>{
        this.isLoading=false
        this.apiError=err.error.message
      }
    })
  }
}
}

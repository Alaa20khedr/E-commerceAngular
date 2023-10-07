import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
user=new BehaviorSubject(null)
  constructor(private _HttpClient:HttpClient , private _Router:Router) { 
  if(localStorage.getItem('userData')!==null){
this.decodedData()
  }

  
  }
decodedData(){
  let decodedToken:any=localStorage.getItem('userData')
  let encododedToken:any=jwtDecode(decodedToken)
  this.user.next(encododedToken)
  console.log(encododedToken)
}
  register(getData:object):Observable<any>{
return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',getData)
  }

  login(getData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',getData)
      }
      logout (){
  localStorage.removeItem('userData')
  this.user.next(null)
  this._Router.navigate(['/login'])
      }

     forgetPassword (getData:any):Observable<any>{
      return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',getData)
}
verifyCode (getData:any):Observable<any>{
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',getData)
}
resetPassword (getData:any):Observable<any>{
  return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',getData)
}
}

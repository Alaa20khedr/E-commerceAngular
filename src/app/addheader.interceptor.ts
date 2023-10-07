import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddheaderInterceptor implements HttpInterceptor {
  
  constructor() {}

  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('signin')||request.url.includes('signup')||request.url.includes('forgotPasswords')||request.url.includes('resetPassword')||request.url.includes('verifyResetCode')){
      return next.handle( request);}
   let token:any=
   localStorage.getItem('userData')
let modifiedrequest=request.clone({
  headers:request.headers.set("token",token)
})
return next.handle( modifiedrequest);
  }
}

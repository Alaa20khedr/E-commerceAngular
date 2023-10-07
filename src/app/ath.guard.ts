import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from './auth.service';

export const athGuard: CanActivateFn = (route, state) => {
  let _Router=inject(Router)
  let auths=inject(AuthService)
  let islogin=auths.user.getValue()!==null
  if(islogin){
    return true;
    }else{
      _Router.navigate(['/login'])
      return false;
    }
  

}
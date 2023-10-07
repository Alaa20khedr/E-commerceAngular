import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadService } from './load.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private _loadservice:LoadService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._loadservice.show();

    return next.handle(request).pipe(
           finalize(() => this._loadservice.hide()),
     );
  }
}



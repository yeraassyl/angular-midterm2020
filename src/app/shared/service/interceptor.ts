import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService implements HttpInterceptor{
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = localStorage.getItem('token');
    if (token){
      const request = req.clone({headers: req.headers.set('Authorization', token)});
      return next.handle(request);
    }
    return next.handle(req);
  }
}

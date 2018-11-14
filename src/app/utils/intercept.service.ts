import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable()//{providedIn: 'root'}

export class InterceptService implements HttpInterceptor {

  constructor() { }

  // intercept request and add token
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // modify request
    if(localStorage.TOKEN){
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'x-access-token': localStorage.TOKEN
        })
      });
    }
    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            if (event.body.token) {
              localStorage.setItem("TOKEN", event.body.token);
            }
          }
        }, error => {
          // http response status code
          console.error(error.status);
          console.error(error.message);

        })
      )

  };


}
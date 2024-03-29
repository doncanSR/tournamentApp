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
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()//{providedIn: 'root'}

export class InterceptService implements HttpInterceptor {

  constructor(private jwtHelperService: JwtHelperService) { }

  // intercept request and add token
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenRol
    // modify request
    if(sessionStorage.TOKEN){
      request = request.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'x-access-token': sessionStorage.TOKEN
        })
      });
    }
    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            if (event.body.token) {
              sessionStorage.setItem("TOKEN", event.body.token);
              tokenRol = this.jwtHelperService.decodeToken(sessionStorage.TOKEN);
              sessionStorage.setItem("ROL", tokenRol['role'])
            }
            if(event.body.name && tokenRol['role'] === 'coach'){
              sessionStorage.setItem("NAME", event.body.name);
            }
            if (event.body.tournament) {
              sessionStorage.setItem("Tournament", event.body.tournament);
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
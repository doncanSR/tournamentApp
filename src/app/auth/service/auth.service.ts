import { Injectable } from '@angular/core';
import { MethodService } from '../../utils/http/method.service';

@Injectable()

export class AuthService {

  constructor(
    private methodService: MethodService
  ) { }

  login(user: any){
    return this.methodService.post('role/auth', user)
  }

  singUp(coach:any){
    return this.methodService.post('coach', coach)
  }

  logout(){
    return this.methodService.post('role/auth/logout', null)
  }
}

import { Injectable } from '@angular/core';
import { MethodService } from '../../utils/http/method.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(
    private methodService: MethodService
  ) { }

  addManager(manager: any) {
    return this.methodService.post('role', manager)
  }

  getCapturist() {
    return this.methodService.get('capturist', null)
  }

  getManager() {
    return this.methodService.get('manager', null)
  }

}

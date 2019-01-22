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

  addCapturist(capturist: any) {
    return this.methodService.post('capturist', capturist)
  }

}

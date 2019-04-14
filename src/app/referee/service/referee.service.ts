import { Injectable } from '@angular/core';
import { MethodService } from '../../utils/http/method.service';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor(
    private methodService: MethodService
  ) { }

  addReferee(referee: any) {
    return this.methodService.post('referee', referee)
  }
    
  getReferees(){
    return this.methodService.get('referee', null);
  }
}

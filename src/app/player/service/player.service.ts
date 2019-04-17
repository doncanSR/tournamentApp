import { Injectable } from '@angular/core';
import { MethodService } from '../../utils/http/method.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private methodService: MethodService
  ) { }

  addPlayer(player: any){
    return this.methodService.post('player',player);
  }
}

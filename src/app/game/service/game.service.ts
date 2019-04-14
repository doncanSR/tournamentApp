import { Injectable } from '@angular/core';
import { MethodService } from '../../utils/http/method.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private methodService: MethodService
  ) {}

  addGame(game: any) {
    return this.methodService.post('match', game)
  }
   

}

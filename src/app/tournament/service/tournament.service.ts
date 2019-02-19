import { Injectable } from '@angular/core';
import { MethodService } from '../../utils/http/method.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
    private methodService: MethodService
  ) { }

  getTournaments(){
    return this.methodService.get('tournament', null);
  }
}

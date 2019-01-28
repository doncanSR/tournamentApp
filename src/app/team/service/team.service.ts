import { Injectable } from '@angular/core';
import { MethodService } from '../../utils/http/method.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private methodService: MethodService
  ) { }

  createTeam(team: any){
    return this.methodService.post('teams', team)
  }

  getCoaches(){
    return this.methodService.get('coach',null)
  }

  getTeams(){
    return this.methodService.get('teams', null)
  }

}

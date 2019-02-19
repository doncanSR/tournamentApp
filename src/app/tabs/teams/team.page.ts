import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../tournament/service/tournament.service';

@Component({
  selector: 'app-team',
  templateUrl: 'team.page.html',
  styleUrls: ['team.page.scss']
})
export class TeamPage implements OnInit{
  tournnamets: any;
  constructor(
    private tournamentService: TournamentService
  ){}
  
  ngOnInit() {
    this.getTournaments();
  }

  getTournaments(){
    this.tournamentService.getTournaments().subscribe(
      data => {
        this.tournnamets = data;
      }, 
      error => {
        console.log(error);
        
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { PlayerService } from '../service/player.service';
import { TeamService } from '../../team/service/team.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';


interface Team {
  _id: string,
  name: string,
  from: string,
  playersNo: number,
  points: number,
  coachId: string
};


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.page.html',
  styleUrls: ['./add-player.page.scss'],
})

export class AddPlayerPage implements OnInit {
  newPlayer: FormGroup;
  submitted = false;
  isManager: boolean;
  couch: any;
  teams: Team[] = [];
  tokenRol: any;

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private teamService: TeamService,
    public alertController: AlertController,
    private jwtHelperService: JwtHelperService,
  ) {
    this.tokenRol = this.jwtHelperService.decodeToken(sessionStorage.TOKEN);
   }

  ngOnInit() {
    this.buildPlayerForm();
    this.chooseRol();
  }


  get f() { return this.newPlayer.controls; }

  buildPlayerForm() {
    this.newPlayer = this.formBuilder.group({
      name: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      secondName: ['', [Validators.required]],
      number: ['', []],
      teamID: ['', []],
      birthday: ['', [Validators.required]],
      tournamentId: ['', []]
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Jugador',
      message: 'Se agrego de manera exitosa',
      buttons: ['OK']
    });

    await alert.present();
  }

  createPlayer(): void {
    this.submitted = true;

    if (this.newPlayer.invalid) {
      return;
    } else {
      this.parseDate();
      console.log(this.newPlayer.value);
      this.playerService.addPlayer(this.newPlayer.value).subscribe(
        data => {
          this.newPlayer.reset();
          this.presentAlert();
          console.log('Player created --->', data);
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  parseDate(){
    let myMoment = moment(this.newPlayer.value.birthday.year.text + '-' + this.newPlayer.value.birthday.month.text + '-' + this.newPlayer.value.birthday.day.text, 'YY-MM-DD').format('MM/DD/YYYY');
    this.newPlayer.value.birthday = myMoment;
  }

  chooseRol() {
    if (sessionStorage.ROL === 'admin' || sessionStorage.ROL === 'coach') {
      this.isManager = true;
      this.getTeams();
    } else {
      this.isManager = false;
      this.newPlayer.value.tournamentId =  sessionStorage.Tournament;
    }
  }

  getTeams() {
    this.teamService.getTeams().subscribe(
      teams => {
        for (let i = 0; i < Object.keys(teams).length; i++) {
          if (sessionStorage.ROL === 'admin')
            this.teams.push(teams[i]);
          else if (sessionStorage.ROL === 'coach' && teams[i].coachId === this.tokenRol.name)
            this.teams.push(teams[i]);
        }
        // console.log('this.teams -->', this.teams);
      },
      error => {
        console.log(error);

      }
    )
  }
}

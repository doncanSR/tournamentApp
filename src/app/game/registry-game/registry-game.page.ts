import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MethodService } from '../../utils/http/method.service';
import { RefereeService } from '../../referee/service/referee.service';
import * as moment from 'moment';
import { AlertController } from '@ionic/angular';
import { TeamService } from '../../team/service/team.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GameService } from '../service/game.service';

interface Team {
  _id: string,
  name: string,
  from: string,
  playersNo: number,
  points: number,
  coachId: string
};


@Component({
  selector: 'app-registry-game',
  templateUrl: './registry-game.page.html',
  styleUrls: ['./registry-game.page.scss'],
})
export class RegistryGamePage implements OnInit {
  newGame: FormGroup;
  submitted = false;
  referees: any;
  isManager: boolean;
  teams: Team[] = [];
  teams2: Team[] = [];
  tokenRol: any;


  constructor(
    private formBuilder: FormBuilder,
    private methodService: MethodService,
    public alertController: AlertController,
    private refereeService: RefereeService,
    private teamService: TeamService,
    private jwtHelperService: JwtHelperService,
    private gameService: GameService
  ) {
    this.tokenRol = this.jwtHelperService.decodeToken(sessionStorage.TOKEN);
   }

  ngOnInit() {
  this.createForm();
  this.chooseRol();

  }

  createForm(){
    this.newGame = this.formBuilder.group({
      teamOne: ['', []],
      teamTwo: ['', []],
      matchDate: ['', [Validators.required]],
      pointTOne: ['', [Validators.required]],
      pointTTwo: ['', [Validators.required]],
      setTOne: ['', [Validators.required]],
      setTTwo: ['', [Validators.required]],
      refereeId: ['', [Validators.required]],
      tournamentId: [this.tokenRol.tournamentId, []],
      faseID: ['', []]
    });
  }


  get f() { return this.newGame.controls; } 

  registryGame(): void{
    this.submitted = true;
    if (this.newGame.invalid) {
      return
    }else{
      this.parseDate();
        if (this.newGame.value.teamOne == this.newGame.value.teamTwo) {
          this.errorAlert();
          return;
        }
        this.gameService.addGame(this.newGame.value).subscribe(
          data => {
            this.newGame.reset();
            this.presentAlert();
            console.log('Game created --->', data);
          },
          err => {
            console.log(err);
          }
        )
    }
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Validación del formulario',
      message: 'Los equipos deben ser distintos.',
      buttons: ['Corregir']
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Juego',
      message: 'Se registro de manera exitos',
      buttons: ['OK']
    });

    await alert.present();
  }

  getReferees() {
    this.refereeService.getReferees().subscribe(
      referees => {
        this.referees = referees;
      },
      error => {
        console.log(error);

      }
    )
  }

  getTeams() {
    this.teamService.getTeams().subscribe(
      teams => {
        for (let i = 0; i < Object.keys(teams).length; i++) 
          if (teams[i].tournamentId == this.tokenRol.tournamentId)
            this.teams.push(teams[i]);
      },
      error => {
        console.log(error);
      }
    )
    this.teams = this.teams2;
  }

   parseDate(){
    let myMoment = moment(this.newGame.value.matchDate.year.text + '-' + this.newGame.value.matchDate.month.text +
    '-' + this.newGame.value.matchDate.day.text + ' ' + this.newGame.value.matchDate.hour.text+ ':' +
    this.newGame.value.matchDate.minute.text + ' ' + this.newGame.value.matchDate.ampm.text, 'YYYY-MM-DD hh:mm a');
    this.newGame.value.matchDate = myMoment;

  }

  chooseRol() {
    if (sessionStorage.ROL === 'admin') {
      this.isManager = true
      this.getReferees();
      this.getTeams();
    } else {
      this.isManager = false;
      this.newGame.value.tournamentId =  sessionStorage.Tournament;
    }
  }

}

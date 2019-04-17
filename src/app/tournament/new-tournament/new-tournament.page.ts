import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AlertController } from '@ionic/angular';
import { TournamentService } from '../service/tournament.service';

@Component({
  selector: 'app-new-tournament',
  templateUrl: './new-tournament.page.html',
  styleUrls: ['./new-tournament.page.scss'],
})
export class NewTournamentPage implements OnInit {
  newTournament: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    private tournamentService: TournamentService

  ) { }

  ngOnInit() {
    this.newTournament = this.formBuilder.group({
      name: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  get f() { return this.newTournament.controls; } 

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Juego',
      message: 'Se registro de manera exitos',
      buttons: ['OK']
    });

    await alert.present();
  }
  parseDate(){
    let myMoment = moment(this.newTournament.value.endDate.year.text + '-' + this.newTournament.value.endDate.month.text + '-' + this.newTournament.value.endDate.day.text ,  'YYYY-MM-DD');
    this.newTournament.value.endDate = myMoment;
    myMoment = moment(this.newTournament.value.startDate.year.text + '-' + this.newTournament.value.startDate.month.text + '-' + this.newTournament.value.startDate.day.text ,  'YYYY-MM-DD');
    this.newTournament.value.startDate = myMoment;
  }

  createTournament(): void{
    this.submitted = true;
    console.log(this.newTournament.value);
    if (this.newTournament.invalid) {
      return;
    } else {
      this.parseDate();
      this.tournamentService.addTournament(this.newTournament.value).subscribe(
        data => {
          this.newTournament.reset();
          this.presentAlert();
          console.log('Game created --->', data);
        },
        err => {
          console.log(err);
        }
      )
    }
  }
}

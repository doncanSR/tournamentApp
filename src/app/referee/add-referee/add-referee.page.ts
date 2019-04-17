import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { TournamentService } from '../../tournament/service/tournament.service';
import { RefereeService } from '../service/referee.service';

@Component({
  selector: 'app-add-referee',
  templateUrl: './add-referee.page.html',
  styleUrls: ['./add-referee.page.scss'],
})
export class AddRefereePage implements OnInit {
  newReferee: FormGroup;
  submitted = false;
  isManager: boolean;
  tournaments: any;

  constructor(
    private formBuilder: FormBuilder,
    private refereeService: RefereeService,
    public alertController: AlertController,
    private tournamentService: TournamentService
  ) { }

  ngOnInit() {
    this.buildManangerForm();
    this.chooseRol();
  }
  get f() { return this.newReferee.controls; }

  buildManangerForm() {
    this.newReferee = this.formBuilder.group({
      name: ['', [Validators.required]],
      firstName: ['', []],
      association: ['', []],
      tournamentId: ['', []]
    });
  }

  getTournaments() {
    this.tournamentService.getTournaments().subscribe(
      tournaments => {
        this.tournaments = tournaments;
      },
      error => {
        console.log(error);

      }
    )
  }

  createReferee(): void {
    this.submitted = true;

    if (this.newReferee.invalid) {
      return;
    } else {
      this.refereeService.addReferee(this.newReferee.value).subscribe(
        data => {
          this.newReferee.reset();
          this.presentAlert();
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Referee',
      message: 'Se agrego de manera exitosa',
      buttons: ['OK']
    });

    await alert.present();
  }

  chooseRol() {
    if (sessionStorage.ROL === 'admin') {
      this.isManager = true
      this.getTournaments();
    } else {
      this.isManager = false;
      this.newReferee.value.tournamentId =  sessionStorage.Tournament;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-new-tournament',
  templateUrl: './new-tournament.page.html',
  styleUrls: ['./new-tournament.page.scss'],
})
export class NewTournamentPage implements OnInit {
  newTournament: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.newTournament = this.formBuilder.group({
      name: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      starDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  get f() { return this.newTournament.controls; } 

  parseDate(){
    let myMoment = moment(this.newTournament.value.endDate.year.text + '-' + this.newTournament.value.endDate.month.text + '-' + this.newTournament.value.endDate.day.text, 'YY-MM-DD').format('MM/DD/YYYY');
    this.newTournament.value.endDate = myMoment;
    myMoment = moment(this.newTournament.value.starDate.year.text + '-' + this.newTournament.value.starDate.month.text + '-' + this.newTournament.value.starDate.day.text, 'YY-MM-DD').format('MM/DD/YYYY');
    this.newTournament.value.starDate = myMoment;
  }

  createTournament(): void{
    this.submitted = true;

    if (this.newTournament.invalid) {
      return;
    } else {
      this.parseDate();
      console.log('Data ---> ', this.newTournament.value);
    }
  }
}

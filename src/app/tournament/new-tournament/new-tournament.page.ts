import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  createTournament(): void{
    this.submitted = true;

    if (this.newTournament.invalid) {
      return;
    } else {
      console.log('Data ---> ', this.newTournament.value)
    }
  }
}

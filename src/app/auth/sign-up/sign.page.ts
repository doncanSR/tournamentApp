import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Coach{
  name: string,
  password: string,
  role: string,
  firtName: string,
  secondName: string,
  association: string,
  teamId: string
}

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})


export class SignPage implements OnInit {
  newCoach: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildCoachForm();
  }
  get f() { return this.newCoach.controls; }

  buildCoachForm() {
    this.newCoach = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firtsName: ['', []],
      secondName: ['', []],
      association: ['', []],
      teamId: ['', []]
    });
  }

  createCoach(): void{
    this.submitted = true;

    if (this.newCoach.invalid) {
      return;
    } else {
      console.log('Data ---> ', this.newCoach.value)
    }
  }

}

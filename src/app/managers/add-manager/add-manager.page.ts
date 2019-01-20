import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.page.html',
  styleUrls: ['./add-manager.page.scss'],
})

export class AddManagerPage implements OnInit {
  newManager: FormGroup;
  submitted = false;
  isManager: boolean;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildManangerForm();
  }
  get f() { return this.newManager.controls; }

  buildManangerForm() {
    this.newManager = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
      firtsName: ['', []],
      secondName: ['', []],
    });
  }

  chooseRol(){
    (sessionStorage.ROL === 'admin') ? this.isManager = true : this.isManager = false;
  }

  createRol(): void{
    this.submitted = true;

    if (this.newManager.invalid) {
      return;
    } else {
      console.log('Data ---> ', this.newManager.value)
    }
  }
}

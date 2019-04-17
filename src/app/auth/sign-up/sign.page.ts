import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';


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
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.buildCoachForm();
  }
  get f() { return this.newCoach.controls; }

  buildCoachForm() {
    this.newCoach = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email:['',[Validators.required, Validators.email]],
      firtsName: ['', []],
      secondName: ['', []],
      rol: ['',[]],
      tournamentId: ['',[]]
    });
  }

  createCoach(): void{
    this.submitted = true;
    this.newCoach.value.rol = 'coach';
    if (this.newCoach.invalid) {
      return;
    } else {
      this.presentLoading();
      console.log('Data ---> ', this.newCoach.value);
      this.loadingController.dismiss();
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}

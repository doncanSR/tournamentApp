import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from "../service/manager.service";
import { AlertController } from '@ionic/angular';

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
    private managerService: ManagerService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.buildManangerForm();
    this.chooseRol();
  }
  get f() { return this.newManager.controls; }

  buildManangerForm() {
    this.newManager = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firtsName: ['', []],
      secondName: ['', []],
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Administrador',
      subHeader: 'Torneo',
      message: 'Se agrego de manera exitos',
      buttons: ['OK']
    });

    await alert.present();
  }


  chooseRol() {
    (sessionStorage.ROL === 'admin') ? this.isManager = true : this.isManager = false;
  }

  createRol(): void {
    this.submitted = true;

    if (this.newManager.invalid) {
      return;
    } else {
      if (this.isManager && this.newManager.value.rol === 'manager') {
        this.managerService.addManager(this.newManager.value).subscribe(
          data => {
            this.newManager.reset();
            this.presentAlert();
          },
          err => {
            console.log(err);
          }
        )
      } else {
        this.managerService.addCapturist(this.newManager.value).subscribe(
          data => {
            this.newManager.reset();
            this.presentAlert();
          },
          err => {
            console.log(err);
          }
        )
      }
    }
  }
}

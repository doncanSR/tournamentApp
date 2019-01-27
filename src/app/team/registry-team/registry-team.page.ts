import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from '../service/team.service';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-registry-team',
  templateUrl: './registry-team.page.html',
  styleUrls: ['./registry-team.page.scss'],
})

export class RegistryTeamPage implements OnInit{
  newTeam: FormGroup;
  submitted: boolean = false;
  isntCoach: boolean = false;
  coaches:any;

  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getCoach();
  }

  get f() { return this.newTeam.controls; }

  buildForm() {
    this.newTeam = this.formBuilder.group({
      name: ['', [Validators.required]],
      playersNo: ['', [Validators.required]],
      from: ['', [Validators.required]],
      coach: ['', []],
      points: ['', []]
    });
  }

  createTeam(): void {
    this.submitted = true;
    this.newTeam.value.points = 0;
    this.teamService.createTeam(this.newTeam.value).subscribe(
      data => {
        this.newTeam.reset();
        this.presentAlert();
        console.log('Team created --->', data);
      },
      err => {
        console.log(err);
      }
    )
  }

  getCoach() {
    
    if (sessionStorage.ROL === 'coach') {
      this.newTeam.value.coach = sessionStorage.NAME;
    } else {
      this.isntCoach = true;
      this.teamService.getCoachs().subscribe(
        data => {
          this.coaches = data;
        }, 
        err => {
          console.log(err);
        }
      )
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Equipo',
      message: 'Se agrego de manera exitos',
      buttons: ['OK']
    });

    await alert.present();
  }
}

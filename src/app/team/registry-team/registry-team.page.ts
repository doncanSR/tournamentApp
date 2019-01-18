import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MethodService } from '../../utils/http/method.service';

@Component({
  selector: 'app-registry-team',
  templateUrl: './registry-team.page.html',
  styleUrls: ['./registry-team.page.scss'],
})
export class RegistryTeamPage implements OnInit {
  newTeam: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private methodService: MethodService
  ) { }

  ngOnInit() {
    this.newTeam = this.formBuilder.group({
      name: ['', [Validators.required]],
      ponints: ['', [Validators.required]],
      playersNo: ['', [Validators.required]],
      from: ['', [Validators.required]],
      coachId: ['', [Validators.required]]
    });
  }

  get f() { return this.newTeam.controls; } 
  createTeam(): void{
    this.submitted = true;

    if (this.newTeam.invalid) {
      return;
    } else {
      console.log('Data ----> ', this.newTeam.value);
      
    }
  }

}

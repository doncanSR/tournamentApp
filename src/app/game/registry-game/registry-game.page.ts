import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MethodService } from '../../utils/http/method.service';

@Component({
  selector: 'app-registry-game',
  templateUrl: './registry-game.page.html',
  styleUrls: ['./registry-game.page.scss'],
})
export class RegistryGamePage implements OnInit {
  newGame: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private methodService: MethodService
  ) { }

  ngOnInit() {
  this.createForm();
  }
  createForm(){
    this.newGame = this.formBuilder.group({
      teamOne: ['', [Validators.required]],
      teamTwo: ['', [Validators.required]]
    });
  }


  get f() { return this.newGame.controls; } 

  registryGame(): void{
    this.submitted = true;
    if (this.newGame.invalid) {
      return
    }else{
      console.log('Data---> ', this.newGame.value);
      
    }
  }
}

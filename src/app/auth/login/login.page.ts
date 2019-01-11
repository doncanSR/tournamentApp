import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MethodService } from '../../utils/http/method.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private methodService: MethodService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  goHome() {
    this.router.navigateByUrl('/tabs/(home:home)');
  }

  get f() { return this.registerForm.controls; } 

  doLogin() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }else{
      this.methodService.post('role/auth', this.registerForm.value)
      .subscribe(
        data => {
          this.goHome()
        },
        err => console.log('Error', err)
      )
    }
  }
}

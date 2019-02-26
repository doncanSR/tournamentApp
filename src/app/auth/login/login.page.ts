import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../service/auth.service";

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
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  goHome() {
    // this.router.navigateByUrl('/tabs/(home:home)');
    this.router.navigateByUrl('/tabs/(home:home)', { skipLocationChange: true }).then(() =>
      this.router.navigate(['']));
  }

  get f() { return this.registerForm.controls; }

  doLogin() {
    this.submitted = true;
    let isLogged:boolean;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this.authService.login(this.registerForm.value).subscribe(
        data => {
          this.router.navigateByUrl('/tabs/(home:home)');
        },
        err => {
          console.log('Error', err)
        }
      )
    }
  }
}

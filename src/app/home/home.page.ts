import { Component, OnInit } from '@angular/core';
import { MethodService } from '../utils/http/method.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  teams: any;

  constructor(
    private methodService: MethodService
  ) { }
  ngOnInit() {
    this.login()
  }

  getTeams() {
    this.methodService.get('teams', null)
      .subscribe(
        data => {
          // console.log('data', data)
        },
        err => console.log('Error', err)
      )
  }
  login() {
    let body = {
      roleId: '5bd48e31d920380a34f0c7cb',
      password: 'Qwerty66'
    };
    this.methodService.post('role/auth', body)
      .subscribe(
        data => {
          console.log(data)
        },
        err => console.log(err)
      )
  }
}

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
}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  logged: boolean = false;
  @Input() title : string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.isLogged();
  }
  doLogin(){
    this.router.navigateByUrl('/login');
  }

  isLogged(){
    if (localStorage.TOKEN) {
      this.logged = true;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../auth/service/auth.service";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  role : string;
  pages:any = [
    {
      title:'Equipo',
      index:2,
      route:'/registry-team'
    },
    {
      title:'Partido',
      index:3,
      route:'/registry-game'
    },
    {
      title:'Torneo',
      index:4,
      route:'/new-tournament'
    },
    {
      title:'Capturistas',
      index:5,
      route:'/add-manager'
    }
  ]
  constructor( 
    private router: Router,
    private authService:AuthService
    ) { }

  ngOnInit() {
    this.role = sessionStorage.ROL;
  }
  logout(){
    this.authService.logout().subscribe(
      data => {
        sessionStorage.clear();
        this.router.navigateByUrl('/tabs/(home:home)');
      }
    )
  }
}

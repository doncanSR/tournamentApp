import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  pages:any = [
    {
      title:'Equipo',
      index:2,
      route:'/equipo'
    },
    {
      title:'Resultado',
      index:3,
      route:'/results'
    },
    {
      title:'Torneo',
      index:4,
      route:'/tournament'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

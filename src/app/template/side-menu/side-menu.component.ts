import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  pages:any = [
    {
      title:'Usuario',
      index:0
    },
    {
      title:'Equipo',
      index:2
    },
    {
      title:'Resultado',
      index:3
    },
    {
      title:'Torneo',
      index:4
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

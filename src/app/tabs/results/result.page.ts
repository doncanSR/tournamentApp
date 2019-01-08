import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: 'result.page.html',
  styleUrls: ['result.page.scss']
})
export class ResultPage {
  headerColumns: any = ['Equipo', 'Puntos', 'Lugar']
  table: any =
    [
      {
        name: 'Equipo 1',
        points: 76,
        position: 1
      },
      {
        name: 'Equipo 2',
        points: 66,
        position: 2
      },
      {
        name: 'Equipo 3',
        points: 46,
        position: 3
      },
      {
        name: 'Equipo 4',
        points: 36,
        position: 4
      }
    ]
}

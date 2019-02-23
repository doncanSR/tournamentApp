import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  cards: any = [
    {
      title: 'Team 1 vs Team 2',
      subTitle: 'the result',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin libero nunc. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Quis lectus nulla at volutpat diam ut venenatis tellus in. Lacus luctus accumsan tortor posuere.'
    },
    {
      title: 'Team 3 vs Team 4',
      subTitle: 'the result',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin libero nunc. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Quis lectus nulla at volutpat diam ut venenatis tellus in. Lacus luctus accumsan tortor posuere.'
    },
    {
      title: 'Team 6 vs Team 8',
      subTitle: 'the result',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada proin libero nunc. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Quis lectus nulla at volutpat diam ut venenatis tellus in. Lacus luctus accumsan tortor posuere.'
    }
  ]

  constructor(
  ) { }
  ngOnInit() {
  }
}

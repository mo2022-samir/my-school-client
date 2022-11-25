import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Cards',
      items: ['UI'],
      active: 'Cards',
    },
  ];

  constructor() {}
  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third1',
  templateUrl: './third1.component.html',
  styleUrls: ['./third1.component.sass'],
})
export class Third1Component implements OnInit {
  breadscrums = [
    {
      title: 'Third 1',
      items: ['Multilevel', 'Third level'],
      active: 'Third 1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

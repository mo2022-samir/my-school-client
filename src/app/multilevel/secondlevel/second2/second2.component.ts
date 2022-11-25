import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second2',
  templateUrl: './second2.component.html',
  styleUrls: ['./second2.component.sass'],
})
export class Second2Component implements OnInit {
  breadscrums = [
    {
      title: 'Second 2',
      items: ['Multilevel', 'Second'],
      active: 'Second 2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

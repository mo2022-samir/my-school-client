import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second1',
  templateUrl: './second1.component.html',
  styleUrls: ['./second1.component.sass'],
})
export class Second1Component implements OnInit {
  breadscrums = [
    {
      title: 'Second 1',
      items: ['Multilevel', 'Second'],
      active: 'Second 1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

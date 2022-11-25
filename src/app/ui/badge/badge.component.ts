import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent implements OnInit {
  breadscrums = [
    {
      title: 'Bedge',
      items: ['UI'],
      active: 'Bedge',
    },
  ];

  constructor() {}
  ngOnInit() {}
}

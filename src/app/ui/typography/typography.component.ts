import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {
  breadscrums = [
    {
      title: 'Typography',
      items: ['UI'],
      active: 'Typography',
    },
  ];

  constructor() {}
  ngOnInit() {}
}

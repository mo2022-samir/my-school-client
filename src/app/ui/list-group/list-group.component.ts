import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss'],
})
export class ListGroupComponent implements OnInit {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];

  breadscrums = [
    {
      title: 'List Group',
      items: ['UI'],
      active: 'List Group',
    },
  ];

  constructor() {}
  ngOnInit() {}
}

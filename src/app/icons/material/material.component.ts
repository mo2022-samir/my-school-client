import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent implements OnInit {
  breadscrums = [
    {
      title: 'Material',
      items: ['Icons'],
      active: 'Material',
    },
  ];
  constructor() {}
  ngOnInit() {}
}

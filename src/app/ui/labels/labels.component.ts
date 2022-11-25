import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss'],
})
export class LabelsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Labels',
      items: ['UI'],
      active: 'Labels',
    },
  ];

  constructor() {}
  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first2',
  templateUrl: './first2.component.html',
  styleUrls: ['./first2.component.sass'],
})
export class First2Component implements OnInit {
  breadscrums = [
    {
      title: 'First 2',
      items: ['Multilevel'],
      active: 'First 2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

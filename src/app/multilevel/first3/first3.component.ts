import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first3',
  templateUrl: './first3.component.html',
  styleUrls: ['./first3.component.sass'],
})
export class First3Component implements OnInit {
  breadscrums = [
    {
      title: 'First 3',
      items: ['Multilevel'],
      active: 'First 3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

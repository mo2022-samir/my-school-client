import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-teacher',
  templateUrl: './about-teacher.component.html',
  styleUrls: ['./about-teacher.component.sass'],
})
export class AboutTeacherComponent implements OnInit {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Teacher'],
      active: 'Profile',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

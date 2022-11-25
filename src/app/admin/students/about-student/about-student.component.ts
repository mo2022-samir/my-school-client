import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-student',
  templateUrl: './about-student.component.html',
  styleUrls: ['./about-student.component.sass'],
})
export class AboutStudentComponent implements OnInit {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Student'],
      active: 'Profile',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

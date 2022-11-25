import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-course',
  templateUrl: './about-course.component.html',
  styleUrls: ['./about-course.component.sass'],
})
export class AboutCourseComponent implements OnInit {
  breadscrums = [
    {
      title: 'About Course',
      items: ['Course'],
      active: 'About Course',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

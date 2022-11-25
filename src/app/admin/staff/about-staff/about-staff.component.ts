import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-staff',
  templateUrl: './about-staff.component.html',
  styleUrls: ['./about-staff.component.sass'],
})
export class AboutStaffComponent implements OnInit {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Staff'],
      active: 'Profile',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

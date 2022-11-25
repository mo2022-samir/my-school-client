import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  breadscrums = [
    {
      title: 'Profile',
      items: ['Extra'],
      active: 'Profile',
    },
  ];

  constructor() {}
  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
})
export class SettingsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Settings',
      items: ['Teacher'],
      active: 'Settings',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

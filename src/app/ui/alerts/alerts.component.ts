import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Alert',
      items: ['UI'],
      active: 'Alert',
    },
  ];
  constructor() {}
  ngOnInit() {}
}

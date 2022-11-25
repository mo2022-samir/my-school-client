import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-receipt',
  templateUrl: './fee-receipt.component.html',
  styleUrls: ['./fee-receipt.component.sass'],
})
export class FeeReceiptComponent implements OnInit {
  breadscrums = [
    {
      title: 'Receipt',
      items: ['Fees'],
      active: 'Receipt',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

import { FeeService } from '../../../core/service/fee.service';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-fees',
  templateUrl: './add-fees.component.html',
  styleUrls: ['./add-fees.component.sass'],
})
export class AddFeesComponent {
  feesForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Fees',
      items: ['Fees'],
      active: 'Add Fees',
    },
  ];
  constructor(private fb: UntypedFormBuilder, private feeService: FeeService) {
    this.feesForm = this.fb.group({
      studentId: ['', [Validators.required]],
      sName: ['', [Validators.required]],
      feeType: ['', [Validators.required]],
      department: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      invoiceNo: ['', [Validators.required]],
      pType: ['', [Validators.required]],
      status: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      details: [''],
    });
  }
  onSubmit() {
    let formData = this.feesForm.value;
    this.feeService.addNewFee(formData).subscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { FeeService } from 'src/app/core/service/fee.service';

@Component({
  selector: 'app-edit-fees',
  templateUrl: './edit-fees.component.html',
  styleUrls: ['./edit-fees.component.sass'],
})
export class EditFeesComponent implements OnInit {
  feesForm: UntypedFormGroup;
  selectedFee;
  feesList;
  feeDetails;
  formdata = {
    rollNo: '99',
    sName: 'Jenish Shah	',
    fType: 'annual',
    department: 'mathematics',
    date: '2020-01-04T14:22:18Z',
    invoiceNo: 'IN-434454',
    pType: 'cheque',
    status: 'paid',
    amount: '320$',
    duration: 'yearly',
    details: 'Annual Tution Fees',
  };

  breadscrums = [
    {
      title: 'Edit Fees',
      items: ['Fees'],
      active: 'Edit Fees',
    },
  ];
  constructor(private fb: UntypedFormBuilder, private feeService: FeeService) {
    this.feesForm = this.createContactForm();
  }
  ngOnInit(): void {
    this.feesForm = this.createContactForm();
    this.getList();
  }
  getList() {
    this.feeService.getFeesList().subscribe((res) => {
      this.feesList = res;
    });
  }

  getFeeDetails(id: string) {
    this.feeService.getFeeById(id).subscribe((res) => {
      this.feeDetails = res;
      this.createContactForm();
      this.feesForm = this.createContactForm();
    });
  }
  onChange() {
    this.getFeeDetails(this.selectedFee);
  }
  onSubmit() {
    this.feeService
      .editFee(this.feeDetails?.serial, this.feesForm.value)
      .subscribe();
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      studentId: [this.feeDetails?.studentId, [Validators.required]],
      sName: [this.feeDetails?.sName],
      feeType: [this.feeDetails?.feeType, [Validators.required]],
      department: [this.feeDetails?.department],
      dueDate: [this.feeDetails?.dueDate, [Validators.required]],
      paymentType: [this.feeDetails?.paymentType, [Validators.required]],
      status: [this.feeDetails?.status, [Validators.required]],
      amount: [this.feeDetails?.amount, [Validators.required]],
      details: [this.feeDetails?.details],
    });
  }
}

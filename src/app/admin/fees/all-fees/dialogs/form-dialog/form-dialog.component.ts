import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FeesService } from '../../fees.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Fees } from '../../fees.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  feesForm: UntypedFormGroup;
  fees: any;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public feesService: FeesService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.fees.sName;
      this.fees = data.fees;
    } else {
      this.dialogTitle = 'New Fees';
      // this.fees = new Fees({});
    }
    this.feesForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      studentId: [this.fees?.studentId],
      serial: [this.fees?.serial, [Validators.required]],
      feeType: [this.fees?.feeType, [Validators.required]],
      dueDate: [
        formatDate(this.fees?.dueDate || new Date(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],

      paymentType: [this.fees?.paymentType, [Validators.required]],
      status: [this.fees?.status, [Validators.required]],
      amount: [this.fees?.amount, [Validators.required]],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    if (this.action === 'edit') {
      this.feesService.updateFees(
        this.fees.serial,
        this.feesForm.getRawValue()
      );
    } else {
      this.feesService.addFees(this.feesForm.getRawValue());
    }
  }
}

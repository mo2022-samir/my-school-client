import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { TeachersService } from '../../teachers.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Teachers } from '../../teachers.model';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass'],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  proForm: UntypedFormGroup;
  teachers: Teachers;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public teachersService: TeachersService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.teachers.name;
      this.teachers = data.teachers;
    } else {
      this.dialogTitle = 'New Teachers';
      this.teachers = new Teachers({});
    }
    this.proForm = this.createContactForm();
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
      password: [this.teachers.user.password, Validators.required],
      name: [this.teachers.user.firstName + this.teachers.user.lastName],
      email: [
        this.teachers.user.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      gender: [this.teachers.user.gender],
      mobile: [this.teachers.user.mobile],
      department: [this.teachers.department],
      education: [this.teachers.education],
    });
  }
  submit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    if (this.action === 'edit') {
      this.teachersService.updateTeachers(
        this.teachers.userId,
        this.proForm.getRawValue()
      );
    } else {
      this.teachersService.addTeachers(this.proForm.getRawValue());
    }
  }
}

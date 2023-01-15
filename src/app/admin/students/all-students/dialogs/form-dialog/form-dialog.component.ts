import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { StudentsService } from '../../students.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder
} from '@angular/forms';
import { Students } from '../../students.model';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  stdForm: UntypedFormGroup;
  students: Students;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public studentsService: StudentsService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.students.name;
      this.students = data.students;
    } else {
      this.dialogTitle = 'New Students';
      this.students = new Students({});
    }
    this.stdForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [
    Validators.required
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
      firstName: [
        this.students.user.firstName,
        [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
      lastName: [this.students.user.lastName],
      rollNo: [this.students.serial],
      gender: [this.students.user.gender, [Validators.required]],
      mobile: [this.students.user.mobile, [Validators.required]],
      createdAt: [
        this.students.user.registerDate,
        [Validators.required],
      ],
      email: [
        this.students.user.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      username: [this.students.user.username, [Validators.required]],
      password: [this.students.user.password, [Validators.required]],
      parentName: [this.students.parentName, [Validators.required]],
      parentPhonenumber: [this.students.parentPhonenumber],
      dateOfBirth: [
        this.students.user.dateOfBirth,
        [Validators.required],
      ],
      bloodGroup: [
        this.students.user.bloodGroup,
        [Validators.required],
      ],
      studyYear: [this.students.studyYear, [Validators.required]],
      educationType: [
        this.students.educationType,
        [Validators.required],
      ],
      address: [this.students.user.address, [Validators.required]],
    });
  }
  submit() {
    this.studentsService.updateStudents(this.students.userId,this.stdForm.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.studentsService.addStudents(this.stdForm.getRawValue());
  }
}

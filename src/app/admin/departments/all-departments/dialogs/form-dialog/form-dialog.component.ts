import { StudyYear } from './../../../../../../../../my-school-server/src/validator/general.validator';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { DepartmentService } from '../../department.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Department } from '../../department.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  departmentForm: UntypedFormGroup;
  department: Department;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public departmentService: DepartmentService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.department.educationType;
      this.department = data.department;
    } else {
      this.dialogTitle = 'New Department';
      this.department = new Department({});
    }
    this.departmentForm = this.createContactForm();
  }
  formControl = new UntypedFormControl('', [Validators.required]);
  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      educationType: [this.department.educationType],
      studyYear: [this.department.educationlevel, [Validators.required]],
      classId: [this.department.classId, [Validators.required]],
    });
  }
  submit() {
    this.departmentService.addDepartment(this.departmentForm.getRawValue());
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.departmentService.addDepartment(this.departmentForm.getRawValue());
  }
}

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { LecturesService } from '../../lectures.service';
import {
  UntypedFormControl,
  Validators,
  UntypedFormGroup,
  UntypedFormBuilder,
} from '@angular/forms';
import { Lectures } from '../../lectures.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { TeacherService } from 'src/app/core/service/teacher.service';
import { CoursesService } from 'src/app/core/service/courses.service';
import { ClassesService } from 'src/app/core/service/classes.service';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FormDialogComponent implements OnInit {
  action: string;
  dialogTitle: string;
  lecturesForm: UntypedFormGroup;
  lectures: any;
  classList: any;
  teacherList: any;
  courseList: any;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public lecturesService: LecturesService,
    private teacherService: TeacherService,
    private coursesService: CoursesService,
    private classesService: ClassesService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.lectures.sName;
      this.lectures = data.lectures;
    } else {
      this.dialogTitle = 'New Lectures';
      this.lectures = new Lectures({});
    }
    this.lecturesForm = this.createContactForm();
  }
  ngOnInit(): void {
    this.getListData();
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
      id: [this.lectures.id],
      sName: [this.lectures.sName, [Validators.required]],
      class: [this.lectures.class, [Validators.required]],
      date: [this.lectures.date, [Validators.required]],
      time: [this.lectures.time, [Validators.required]],
      status: [this.lectures.status, [Validators.required]],
    });
  }
  submit() {
    // emppty stuff
  }
  getListData() {
    this.teacherService
      .getTeachers()
      .subscribe((res) => (this.teacherList = res));
    this.coursesService
      .getCoursesList()
      .subscribe((res) => (this.courseList = res));
    this.classesService
      .getClassesList()
      .subscribe((res) => (this.classList = res));
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    if (this.action === 'edit') {
      this.lecturesService.updateLectures(this.lecturesForm.getRawValue());
    } else {
      this.lecturesService.addLectures(this.lecturesForm.getRawValue());
    }
  }
}

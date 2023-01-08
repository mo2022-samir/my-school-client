import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.sass'],
})
export class AddCourseComponent {
  courseForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Course',
      items: ['Course'],
      active: 'Add Course',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.courseForm = this.fb.group({
      cName: ['', [Validators.required]],
      cCode: ['', [Validators.required]],
      cDetails: ['', [Validators.required]],
      specitailty: ['', [Validators.required]],
      year: ['', [Validators.required]],
      uploadFile: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.courseForm.value);
  }
}

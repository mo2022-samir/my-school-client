import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.sass'],
})
export class EditCourseComponent {
  courseForm: UntypedFormGroup;
  formdata = {
    cName: '',
    cCode: '',
    cDetails: '',
    specitailty: '',
    year: '',
    uploadFile: '',
  };
  breadscrums = [
    {
      title: 'Edit Course',
      items: ['Course'],
      active: 'Edit Course',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.courseForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.courseForm.value);
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      cName: [this.formdata.cName, [Validators.required]],
      cCode: [this.formdata.cCode],
      cDetails: [this.formdata.cDetails, [Validators.required]],
      specitailty: [this.formdata.specitailty, [Validators.required]],
      year: [this.formdata.year, [Validators.required]],
      uploadFile: [this.formdata.uploadFile],
    });
  }
}

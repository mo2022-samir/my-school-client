import { CoursesService } from '../../../core/service/courses.service';
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
  constructor(
    private fb: UntypedFormBuilder,
    private courseService: CoursesService
  ) {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required]],
      subjectId: ['', [Validators.required]],
      description: ['', [Validators.required]],
      educationType: ['', [Validators.required]],
      studyYear: ['', [Validators.required]],
      uploadFile: [''],
    });
  }
  onSubmit() {
    let formData = this.courseForm.value;
    this.courseService.addNewCourse(formData).subscribe();
  }
}

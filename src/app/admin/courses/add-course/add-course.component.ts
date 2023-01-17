import { SubjectMaterialService } from './../../../core/service/subjectMaterial.service';
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
    private courseService: CoursesService,
    private subjectMaterialService: SubjectMaterialService
  ) {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required]],
      subjectId: ['', [Validators.required]],
      description: ['', [Validators.required]],
      educationType: ['', [Validators.required]],
      studyYear: ['', [Validators.required]],
      pdf: [''],
    });
  }
  onSubmit() {
    let formData = this.courseForm.value;
    this.courseService.addNewCourse(formData).subscribe();
    this.subjectMaterialService
      .addNewMaterial(formData.subjectId, formData)
      .subscribe();
  }
}

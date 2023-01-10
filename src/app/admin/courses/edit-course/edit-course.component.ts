import { CoursesService } from 'src/app/core/service/courses.service';
import { Component, OnInit } from '@angular/core';
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
export class EditCourseComponent implements OnInit {
  courseForm: UntypedFormGroup;
  selectedCourse;
  coursesList;
  courseDetails;

  breadscrums = [
    {
      title: 'Edit Course',
      items: ['Course'],
      active: 'Edit Course',
    },
  ];
  constructor(
    private fb: UntypedFormBuilder,
    private courseService: CoursesService
  ) {
    this.courseForm = this.createContactForm();
  }

  ngOnInit(): void {
    this.courseForm = this.createContactForm();
    this.getList();
  }

  getList() {
    this.courseService.getCoursesList().subscribe((res) => {
      this.coursesList = res;
    });
  }

  getCourseDetails(id: string) {
    this.courseService.getCourseById(id).subscribe((res) => {
      this.courseDetails = res;
      this.createContactForm();
      this.courseForm = this.createContactForm();
    });
  }

  onChange() {
    this.getCourseDetails(this.selectedCourse);
  }

  onSubmit() {
    this.courseService
      .editCourse(this.courseDetails?.subjectId, this.courseForm.value)
      .subscribe();
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      name: [this.courseDetails?.name, [Validators.required]],
      subjectId: [this.courseDetails?.subjectId],
      cDetails: [this.courseDetails?.cDetails, [Validators.required]],
      educationType: [this.courseDetails?.educationType, [Validators.required]],
      studyYear: [this.courseDetails?.studyYear, [Validators.required]],
      uploadFile: [this.courseDetails?.uploadFile],
    });
  }
}

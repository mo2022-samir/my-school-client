import { TeacherService } from './../../../core/service/teacher.service';
import { ClassesService } from './../../../core/service/classes.service';
import { Component } from '@angular/core';
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.sass'],
})
export class AddDepartmentComponent {
  departmentForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Department',
      items: ['Department'],
      active: 'Add',
    },
  ];
  constructor(
    private fb: UntypedFormBuilder,
    private classService: ClassesService,
    private teacherService: TeacherService
  ) {
    this.departmentForm = this.fb.group({
      educationType: ['', [Validators.required]],
      studyYear: ['', [Validators.required]],
      classId: ['', [Validators.required]],
    });
  }

  onSubmit() {
    let formData = this.departmentForm.value;
    this.classService.addNewClass(formData).subscribe();
  }
}

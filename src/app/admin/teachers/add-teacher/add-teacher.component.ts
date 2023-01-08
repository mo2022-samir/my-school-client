import { TeacherService } from './../../../core/service/teacher.service';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.sass'],
})
export class AddTeacherComponent {
  proForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Teacher',
      items: ['Teacher'],
      active: 'Add Teacher',
    },
  ];
  constructor(
    private fb: UntypedFormBuilder,
    private teacherService: TeacherService
  ) {
    this.proForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastName: [''],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      department: [''],
      address: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      registerDate: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      education: [''],
      uploadFile: [''],
    });
  }
  onSubmit() {
    let formData = this.proForm.value;
    this.teacherService.addTeacher(formData).subscribe();
  }
}

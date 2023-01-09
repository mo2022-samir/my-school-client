import { StudentService } from './../../../core/service/student.service';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.sass'],
})
export class AddStudentComponent {
  stdForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Student',
      items: ['Student'],
      active: 'Add Student',
    },
  ];
  constructor(
    private fb: UntypedFormBuilder,
    private studentService: StudentService
  ) {
    this.stdForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastName: [''],
      gender: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      mobile: ['', [Validators.required]],
      registerDate: ['', [Validators.required]],
      educationType: [''],
      parentName: ['', [Validators.required]],
      parentPhonenumber: [''],
      dateOfBirth: ['', [Validators.required]],
      bloodGroup: ['O+'],
      studyYear:[''],
      address: [''],
      uploadFile: [''],
    });
  }
  onSubmit() {
    let formData = this.stdForm.value;
    this.studentService.addNewStudent(formData).subscribe();
  }
}

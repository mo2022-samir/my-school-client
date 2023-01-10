import { TeacherService } from './../../../core/service/teacher.service';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.sass'],
})
export class EditTeacherComponent implements OnInit {
  proForm: UntypedFormGroup;
  selectedTeacher;
  teacherList: any;
  teachersDetails: any;
  formdata = {
    first: 'Pooja',
    last: 'Sarma',
    gender: 'female',
    mobile: '123456789',
    password: '123',
    conformPassword: '123',
    email: 'test@example.com',
    designation: 'Sr. Teacher',
    department: 'science',
    address: '101, Elanxa, New Yourk',
    dob: '1987-02-17T14:22:18Z',
    education: 'M.Sc.,P.H.D.',
    uploadFile: '',
  };
  breadscrums = [
    {
      title: 'Edit Teacher',
      items: ['Teacher'],
      active: 'Edit Teacher',
    },
  ];
  constructor(
    private fb: UntypedFormBuilder,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.proForm = this.createContactForm();
    this.getList();
  }
  onSubmit() {
    this.teacherService.editTeacher(this.teachersDetails?.userId,this.proForm.value).subscribe();
  }

  getList() {
    this.teacherService.getTeachers().subscribe((res) => {
      this.teacherList = res;
    });
  }

  getTeacherDetails(id: string) {
    this.teacherService.getTeacherById(id).subscribe((res) => {
      this.teachersDetails = res;
      this.createContactForm();
      this.proForm = this.createContactForm();
      console.log(res);
    });
  }

  onChange() {
    this.getTeacherDetails(this.selectedTeacher);
    console.log(this.selectedTeacher)
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      // userId:[this.teachersDetails?.userId],
      first: [
        this.teachersDetails?.user.firstName,
        [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
      last: [this.teachersDetails?.user.lastName],
      gender: [this.teachersDetails?.user.gender, [Validators.required]],
      mobile: [this.teachersDetails?.user.mobile, [Validators.required]],
      password: [
        this.teachersDetails?.user.password,
        [Validators.required, Validators.minLength(5)],
      ],
      conformPassword: [
        this.teachersDetails?.user.password,
        [Validators.required, Validators.minLength(5)],
      ],
      email: [
        this.teachersDetails?.user.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      department: [this.teachersDetails?.department, [Validators.required]],
      dob: [this.teachersDetails?.user.dateOfBirth, [Validators.required]],
      education: [this.teachersDetails?.education, [Validators.required]],
      address: [this.teachersDetails?.user.address],
      uploadFile: [this.teachersDetails?.user.uploadFile],
    });
  }
}

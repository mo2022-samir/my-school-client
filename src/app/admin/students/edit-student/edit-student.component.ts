import { Observable } from 'rxjs/internal/Observable';
import { StudentService } from './../../../core/service/student.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.sass'],
})
export class EditStudentComponent implements OnInit {
  stdForm: UntypedFormGroup;
  selectedStudent;
  studentsList: Observable<{ id: number; name: string }>;
  studentsDetails: any;
  formdata = {
    fName: 'Pooja',
    lName: 'Sarma',
    rollNo: '12',
    gender: 'male',
    email: 'test@example.com',
    mobile: '123456789',
    rDate: '2020-02-05T14:22:18Z',
    department: 'mathematics',
    bGroup: 'O+',
    dob: '1987-02-17T14:22:18Z',
    parentName: 'Sanjay Shukla',
    parentNo: '1234567890',
    address: '101, Elanxa, New Yourk',
    uploadFile: '',
  };
  breadscrums = [
    {
      title: 'Edit Student',
      items: ['Student'],
      active: 'Edit Student',
    },
  ];
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.getList();
    this.stdForm = this.createContactForm();
  }

  onSubmit() {
    // console.log('Form Value', this.stdForm.value);
  }
  getList() {
    this.studentsList = this.studentService.getStudentsList();
  }
  getStudentDetails(id: number) {
    this.studentService.getStudentById(id).subscribe((res) => {
      this.studentsDetails = res;
      this.createContactForm();

      this.stdForm = this.createContactForm();
      console.log(this.studentsDetails);
    });
  }
  onChange() {
    this.getStudentDetails(this.selectedStudent);
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      first: [
        this.studentsDetails?.firstName,
        [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
      last: [this.studentsDetails?.lastName],
      rollNo: [this.studentsDetails?.id],
      gender: [this.studentsDetails?.gender, [Validators.required]],
      mobile: [this.studentsDetails?.mobile, [Validators.required]],
      rDate: [this.studentsDetails?.registerDate, [Validators.required]],
      email: [
        this.studentsDetails?.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      department: [this.studentsDetails?.educationType],
      parentName: [this.studentsDetails?.parentName, [Validators.required]],
      parentNo: [this.studentsDetails?.parentPhonenumber],
      dob: [this.studentsDetails?.dateOfBirth, [Validators.required]],
      bGroup: [this.studentsDetails?.bloodGroup],
      address: [this.studentsDetails?.address],
      uploadFile: [this.studentsDetails?.uploadFile],
    });
  }
}

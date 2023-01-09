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
    this.studentService.editStudent(this.studentsDetails?.userId,this.stdForm.value).subscribe();
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
      firstName: [
        this.studentsDetails?.user.firstName,
        [Validators.required, Validators.pattern('[a-zA-Z]+')],
      ],
      lastName: [this.studentsDetails?.user.lastName],
      rollNo: [this.studentsDetails?.serial],
      gender: [this.studentsDetails?.user.gender, [Validators.required]],
      mobile: [this.studentsDetails?.user.mobile, [Validators.required]],
      registerDate: [this.studentsDetails?.user.registerDate, [Validators.required]],
      email: [
        this.studentsDetails?.user.email,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      educationType: [this.studentsDetails?.educationType],
      parentName: [this.studentsDetails?.parentName, [Validators.required]],
      parentPhonenumber: [this.studentsDetails?.parentPhonenumber],
      dateOfBirth: [this.studentsDetails?.user.dateOfBirth, [Validators.required]],
      bloodGroup: [this.studentsDetails?.user.bloodGroup],
      studyYear:[this.studentsDetails?.studyYear],
      address: [this.studentsDetails?.user.address],
      uploadFile: [this.studentsDetails?.uploadFile],
    });
  }
}

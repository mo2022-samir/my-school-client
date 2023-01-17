import { StudentService } from './../../core/service/student.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
})
export class SettingsComponent implements OnInit {
  securityForm :FormGroup;
  settingsForm: FormGroup;
  userInfo: any;
  userData =JSON.parse(localStorage.getItem("currentUser")) 
  breadscrums = [
    {
      title: 'Settings',
      items: ['Student'],
      active: 'Settings',
    },
  ];

  constructor(private studentService:StudentService,private fb: FormBuilder) {
  }
  form1() {
    this.securityForm = this.fb.group({
      username: [this.userInfo?.user.username, [Validators.required]],
      password: [this.userInfo?.user.password, Validators.required],
    });
  }
  form2() {
    this.settingsForm = this.fb.group({
      firstName: [this.userInfo?.user.firstName, [Validators.required]],
      lastName: [this.userInfo?.user.lastName, Validators.required],
      email: [this.userInfo?.user.email, [Validators.email,Validators.required]],
      address: [this.userInfo?.user.address, Validators.required],
    });
  }
  onSubmitForm1(){
    this.studentService.editStudent(this.userData.id, this.securityForm.value).subscribe()
  }
  onSubmitForm2(){
    this.studentService.editStudent(this.userData.id, this.settingsForm.value).subscribe()
  }
  ngOnInit(): void {
  this.form1();
  this.form2();
    this.studentService.getStudentById(this.userData.id).subscribe(
      res=> {this.userInfo = res;
      this.form1();
    this.form2()}
    )
  }
}

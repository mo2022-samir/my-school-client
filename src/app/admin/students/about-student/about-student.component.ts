import { StudentService } from './../../../core/service/student.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-student',
  templateUrl: './about-student.component.html',
  styleUrls: ['./about-student.component.sass'],
})
export class AboutStudentComponent implements OnInit {
  num: number = 0;
  selectedStudent: any;
  studentsData: any;
  studentsList: Observable<{ id: number; name: string }>;
  breadscrums = [
    {
      title: 'Profile',
      items: ['Student'],
      active: 'Profile',
    },
  ];
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getList();
  }

  onChange() {
    this.getStudentDetails(this.selectedStudent);
  }
  getStudentDetails(id: number) {
    this.studentService.getStudentById(id).subscribe((res) => {
      this.studentsData = res;

      console.log(this.studentsData);
    });
  }
  getList() {
    this.studentsList = this.studentService.getStudentsList();
  }
}

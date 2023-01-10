import { TeacherService } from './../../../core/service/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-about-teacher',
  templateUrl: './about-teacher.component.html',
  styleUrls: ['./about-teacher.component.sass'],
})
export class AboutTeacherComponent implements OnInit {
  num: number = 0;
  selectedTeacher: any;
  teacherData: any;
  teacherList: Observable<any>;
  breadscrums = [
    {
      title: 'Profile',
      items: ['Teacher'],
      active: 'Profile',
    },
  ];
  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.getList();
  }
  onChange() {
    this.getTeacherDetails(this.selectedTeacher);
  
  }
  getTeacherDetails(id: string) {
    this.teacherService.getTeacherById(id).subscribe((res) => {
      this.teacherData = res;
    });
  }
  getList() {
    this.teacherList = this.teacherService.getTeachers();
  }
}

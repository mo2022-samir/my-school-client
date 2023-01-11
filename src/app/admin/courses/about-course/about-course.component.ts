import { CoursesService } from 'src/app/core/service/courses.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-about-course',
  templateUrl: './about-course.component.html',
  styleUrls: ['./about-course.component.sass'],
})
export class AboutCourseComponent implements OnInit {
  num: number = 0;
  selectedCourse: any;
  courseData: any;
  coursesList: Observable<any>;
  breadscrums = [
    {
      title: 'About Course',
      items: ['Course'],
      active: 'About Course',
    },
  ];
  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getList();
  }
  getList(): void {
    this.coursesList = this.coursesService.getCoursesList();
  }
  onChange(): void {
    this.getCourseDetails(this.selectedCourse);
  }
  getCourseDetails(id: string) {
    this.coursesService.getCourseById(id).subscribe((res) => {
      this.courseData = res;
    });
  }
}

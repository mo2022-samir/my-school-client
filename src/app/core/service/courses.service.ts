import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}
  getCoursesList() {
    return this.http.get(environment.apiUrl + 'subject/');
  }
  getCourseById(courseId: string) {
    return this.http.get(environment.apiUrl + 'subject/' + courseId);
  }
  addNewCourse(course: any) {
    return this.http.post(environment.apiUrl + 'subject/', course);
  }
  editCourse(courseId: string, changes: any) {
    return this.http.put(environment.apiUrl + 'subject/' + courseId, changes);
  }
  deleteCourse(courseId: string) {
    return this.http.delete(environment.apiUrl + 'subject/' + courseId);
  }
}

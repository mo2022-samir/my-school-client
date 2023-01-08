import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  getTeachersList() {
    return this.http.get(environment.apiUrl + 'teacher/');
  }
  getTeacherById(id: number) {
    return this.http.get(environment.apiUrl + 'teacher/' + id);
  }
  addTeacher(teacher: any) {
    return this.http.post(environment.apiUrl + 'teacher/', teacher);
  }
}

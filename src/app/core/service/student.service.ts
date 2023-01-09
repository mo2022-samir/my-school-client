import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudentsList() {
    return this.http.get<{ id: number; name: string }>(
      `${environment.apiUrl}student/`
    );
  }
  getStudentById(id: number) {
    return this.http.get(`${environment.apiUrl}student/${id}`);
  }
  addNewStudent(student: any) {
    return this.http.post(`${environment.apiUrl}student/`, student);
  }
  editStudent(id: string,changes: any){
    return this.http.put(environment.apiUrl + 'student/'+id, changes)
  }
}

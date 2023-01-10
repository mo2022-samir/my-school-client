import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  getTeachers() {
    return this.http.get(environment.apiUrl + 'teacher/');
  }
  getTeacherById(id: string) {
    return this.http.get(environment.apiUrl + 'teacher/' + id);
  }
  addTeacher(teacher: any) {
    return this.http.post(environment.apiUrl + 'teacher/', teacher);
  }
  editTeacher(id: string,changes: any){
    return this.http.put(environment.apiUrl + 'teacher/'+id, changes).pipe(
      shareReplay()
    )
  }
}

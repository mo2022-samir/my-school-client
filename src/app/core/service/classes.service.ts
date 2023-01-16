import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  constructor(private http: HttpClient) {}
  getClassesList() {
    return this.http.get(environment.apiUrl + 'studyClass/');
  }
  getClassById(classId: string) {
    return this.http.get(environment.apiUrl + 'studyClass/' + classId);
  }
  addNewClass(newclass: any) {
    return this.http.post(environment.apiUrl + 'studyClass/', newclass);
  }
  editClass(classId: string, changes: any) {
    return this.http.put(environment.apiUrl + 'studyClass/' + classId, changes);
  }
  deleteClass(classId: string) {
    return this.http.delete(environment.apiUrl + 'studyClass/' + classId);
  }
}

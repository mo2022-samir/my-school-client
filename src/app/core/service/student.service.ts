import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(private http: HttpClient) { }

getStudentsList(){
return this.http.get<{id:number, name:string}>(`${environment.apiUrl}students`)
}
getStudentById(id: number){
return this.http.get(`${environment.apiUrl}students/${id}`)
}
addNewStudent(formData: any){
  return this.http.post(`${environment.apiUrl}students`, formData)
}
}

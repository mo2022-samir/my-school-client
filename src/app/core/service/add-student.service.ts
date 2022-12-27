import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddStudentService {
  constructor(private http: HttpClient) {}

  adduser(userData: any) {
    return this.http.post<any>(`${environment.apiUrl}student`, userData);
  }
}

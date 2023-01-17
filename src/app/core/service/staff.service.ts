import { Staff } from './../../admin/staff/all-staff/staff.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  apiURL = 'http://localhost:3000/staff';
  constructor(private http: HttpClient) {}

  getStaffList() {
    return this.http.get<Staff[]>(`${this.apiURL}`);
  }
  getStaffById(id: string) {
    return this.http.get(`${this.apiURL}/${id}`);
  }
  addNewStaff(staff: Staff) {
    return this.http.post(`${this.apiURL}`, staff);
  }
  editStaff(id: string, changes: any) {
    return this.http.put(this.apiURL + `/${id}`, changes);
  }
  deleteStaff(id: string) {
    return this.http.delete(`${this.apiURL}${id}`);
  }
}

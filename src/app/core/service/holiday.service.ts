import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  constructor(private http: HttpClient) {}
  getHolidaysList() {
    return this.http.get(environment.apiUrl + 'holiday/');
  }
  getHolidayById(holidayId: string) {
    return this.http.get(environment.apiUrl + 'holiday/' + holidayId);
  }
  addNewHoliday(holiday: any) {
    return this.http.post(environment.apiUrl + 'holiday/', holiday);
  }
  editHoliday(holidayId: string, changes: any) {
    return this.http.put(environment.apiUrl + 'holiday/' + holidayId, changes);
  }
  deleteHoliday(holidayId: string) {
    return this.http.delete(environment.apiUrl + 'holiday/' + holidayId);
  }
}

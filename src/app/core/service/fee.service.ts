import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeeService {
  constructor(private http: HttpClient) {}
  getFeesList() {
    return this.http.get(environment.apiUrl + 'fee/');
  }
  getFeeById(feeId: string) {
    return this.http.get(environment.apiUrl + 'fee/' + feeId);
  }
  addNewFee(fee: any) {
    return this.http.post(environment.apiUrl + 'fee/', fee);
  }
  editFee(feeId: string, changes: any) {
    return this.http.put(environment.apiUrl + 'fee/' + feeId, changes);
  }
  deleteFee(feeId: string) {
    return this.http.delete(environment.apiUrl + 'fee/' + feeId);
  }
}

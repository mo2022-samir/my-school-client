import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Homework } from './homework.modal';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class HomeworkService {
  private readonly API_URL = 'https://my-school.deta.dev/stdHomework';

  dataChange: BehaviorSubject<Homework[]> = new BehaviorSubject<Homework[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) {}

  get data(): Homework[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): Observable<Homework[]> {
    return this.httpClient.get<Homework[]>(this.API_URL);
  }

  addLeaveRequest(leaveRequest: Homework): void {
    this.dialogData = leaveRequest;

    this.httpClient.post(this.API_URL, leaveRequest).subscribe(
      (data) => {
        this.dialogData = leaveRequest;
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
  updateLeaveRequest(leaveRequest: Homework): void {
    this.dialogData = leaveRequest;

    this.httpClient.put(this.API_URL + leaveRequest.id, leaveRequest).subscribe(
      (data) => {
        this.dialogData = leaveRequest;
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
  deleteLeaveRequest(id: number): void {
    console.log(id);

    this.httpClient.delete(this.API_URL + id).subscribe(
      (data) => {
        console.log(id);
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
}

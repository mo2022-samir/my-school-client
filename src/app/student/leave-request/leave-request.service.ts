import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LeaveRequest } from './leave-request.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class LeaveRequestService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'https://my-school.deta.dev/stdLeaveReq';
  isTblLoading = true;
  dataChange: BehaviorSubject<LeaveRequest[]> = new BehaviorSubject<
    LeaveRequest[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): LeaveRequest[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllLeaveRequests(): void {
    this.subs.sink = this.httpClient
      .get<LeaveRequest[]>(this.API_URL)
      .subscribe(
        (data) => {
          this.isTblLoading = false;
          this.dataChange.next(data);
        },
        (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.log(error.name + ' ' + error.message);
        }
      );
  }
  addLeaveRequest(leaveRequest: LeaveRequest): void {
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
  updateLeaveRequest(leaveRequest: LeaveRequest): void {
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

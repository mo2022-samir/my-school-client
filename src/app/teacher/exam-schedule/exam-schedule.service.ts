import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExamSchedule } from './exam-schedule.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class ExamScheduleService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/examSchedule.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<ExamSchedule[]> = new BehaviorSubject<
    ExamSchedule[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): ExamSchedule[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllExamSchedule(): void {
    this.subs.sink = this.httpClient
      .get<ExamSchedule[]>(this.API_URL)
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
  addExamSchedule(examSchedule: ExamSchedule): void {
    this.dialogData = examSchedule;

    /*  this.httpClient.post(this.API_URL, examSchedule).subscribe(data => {
      this.dialogData = examSchedule;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateExamSchedule(examSchedule: ExamSchedule): void {
    this.dialogData = examSchedule;

    /* this.httpClient.put(this.API_URL + examSchedule.id, examSchedule).subscribe(data => {
      this.dialogData = examSchedule;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteExamSchedule(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }
}

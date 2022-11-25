import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StudentAttendance } from './student-attendance.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class StudentAttendanceService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/student-attendance.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<StudentAttendance[]> = new BehaviorSubject<
    StudentAttendance[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): StudentAttendance[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllStudentAttendances(): void {
    this.subs.sink = this.httpClient
      .get<StudentAttendance[]>(this.API_URL)
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
  addStudentAttendance(studentAttendance: StudentAttendance): void {
    this.dialogData = studentAttendance;

    /*  this.httpClient.post(this.API_URL, studentAttendance).subscribe(data => {
      this.dialogData = studentAttendance;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateStudentAttendance(studentAttendance: StudentAttendance): void {
    this.dialogData = studentAttendance;

    /* this.httpClient.put(this.API_URL + studentAttendance.id, studentAttendance).subscribe(data => {
      this.dialogData = studentAttendance;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteStudentAttendance(id: number): void {
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

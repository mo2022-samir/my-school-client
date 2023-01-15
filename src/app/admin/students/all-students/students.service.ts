import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Students } from './students.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class StudentsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/students.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Students[]> = new BehaviorSubject<Students[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Students[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllStudentss(): void {
    this.subs.sink = this.httpClient
      .get<Students[]>(environment.apiUrl + 'student/')
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
  addStudents(students: Students): void {
    this.dialogData = students;

    this.httpClient.post(environment.apiUrl + 'student/', students).subscribe(
      (data) => {
        this.dialogData = students;
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
  updateStudents(id:string, students: Students): void {
    this.dialogData = students;

    this.httpClient
      .put(environment.apiUrl + `student/${id}`, students)
      .subscribe(
        (data) => {
          this.dialogData = students;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );
  }
  deleteStudents(id: string): void {
    console.log(id);

    this.httpClient.delete(environment.apiUrl + 'student/' + id).subscribe(
      (data) => {
        console.log(id);
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
}

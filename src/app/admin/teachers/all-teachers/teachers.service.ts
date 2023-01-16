import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Teachers } from './teachers.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class TeachersService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/teachers.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Teachers[]> = new BehaviorSubject<Teachers[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Teachers[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllTeacherss(): void {
    this.subs.sink = this.httpClient
      .get<Teachers[]>(environment.apiUrl + 'teacher')
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
  addTeachers(teachers: Teachers): void {
    this.dialogData = teachers;

    this.httpClient.post(environment.apiUrl + 'teacher/', teachers).subscribe(
      (data) => {
        this.dialogData = teachers;
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
  updateTeachers(id, teachers: Teachers): void {
    this.dialogData = teachers;

    this.httpClient
      .put(environment.apiUrl + 'teacher/' + id, teachers)
      .subscribe(
        (data) => {
          this.dialogData = teachers;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );
  }
  deleteTeachers(id: number): void {
    this.httpClient.delete(environment.apiUrl + 'teacher/' + id).subscribe(
      (data) => {
        console.log(id);
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lectures } from './lectures.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { environment } from 'src/environments/environment';
@Injectable()
export class LecturesService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/lectures.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Lectures[]> = new BehaviorSubject<Lectures[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Lectures[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllLecturess(): void {
    this.subs.sink = this.httpClient
      .get<Lectures[]>(environment.apiUrl + 'activeSubject')
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
  addLectures(lectures: Lectures): void {
    this.dialogData = lectures;

    this.httpClient
      .post(environment.apiUrl + 'activeSubject', lectures)
      .subscribe(
        (data) => {
          this.dialogData = lectures;
        },
        (err: HttpErrorResponse) => {
          // error code here
        }
      );
  }
  updateLectures(lectures: Lectures): void {
    this.dialogData = lectures;

    /* this.httpClient.put(this.API_URL + lectures.id, lectures).subscribe(data => {
      this.dialogData = lectures;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteLectures(id: number): void {
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

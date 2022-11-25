import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Homework } from './homework.modal';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HomeworkService {
  private readonly API_URL = 'assets/data/stdHomework.json';

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

  addIssue(homework: Homework): void {
    this.dialogData = homework;

    /*  this.httpClient.post(this.API_URL, homework).subscribe(data => {
      this.dialogData = homework;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }

  updateIssue(homework: Homework): void {
    this.dialogData = homework;

    /* this.httpClient.put(this.API_URL + homework.id, homework).subscribe(data => {
      this.dialogData = homework;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }

  deleteIssue(id: number): void {
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

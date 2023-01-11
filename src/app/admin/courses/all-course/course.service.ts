import { environment } from '../../../../environments/environment';
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Courses} from './courses.model'

@Injectable()
export class CourseService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/teachers.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Courses[]> = new BehaviorSubject<Courses[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Courses[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllCourses(): void {
    this.subs.sink = this.httpClient.get<Courses[]>(environment.apiUrl+ 'subject').subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
        console.log(data)
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
        console.log(error)
      }
    );
  }
  addCourses(courses: Courses): void {
    this.dialogData = courses;

     this.httpClient.post(environment.apiUrl + `subject`, courses).subscribe(data => {
      this.dialogData = courses;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });
  }
  updateCourses(id: string ,courses: Courses): void {
    this.dialogData = courses;

     this.httpClient.put(environment.apiUrl + `subject/${id}`, courses).subscribe(data => {
      this.dialogData = courses;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );
  }
  deleteCourses(obj: any): void {
    // console.log(id);

     this.httpClient.delete(environment.apiUrl+ 'subject/' + obj).subscribe(data => {
      console.log(obj);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );
  }
}

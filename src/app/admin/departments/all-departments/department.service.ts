import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Department } from './department.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { environment } from 'src/environments/environment';
@Injectable()
export class DepartmentService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/department.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Department[]> = new BehaviorSubject<Department[]>(
    []
  );
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Department[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllDepartments(): void {
    this.subs.sink = this.httpClient
      .get<Department[]>(environment.apiUrl + 'studyClass/')
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
  addDepartment(department: Department): void {
    this.dialogData = department;

    this.httpClient
      .post(environment.apiUrl + 'studyClass/', department)
      .subscribe();
  }
  updateDepartment(department: Department): void {
    this.dialogData = department;

    this.httpClient
      .put(environment.apiUrl + 'studyClass/' + department.classId, department)
      .subscribe();
  }
  deleteDepartment(classId: string): void {
    this.httpClient
      .delete(environment.apiUrl + 'studyClass/' + classId)
      .subscribe();
  }
}

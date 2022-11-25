import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Holiday } from './holiday.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class HolidayService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/holiday.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Holiday[]> = new BehaviorSubject<Holiday[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Holiday[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllHolidays(): void {
    this.subs.sink = this.httpClient.get<Holiday[]>(this.API_URL).subscribe(
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
  addHoliday(holiday: Holiday): void {
    this.dialogData = holiday;

    /*  this.httpClient.post(this.API_URL, holiday).subscribe(data => {
      this.dialogData = holiday;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateHoliday(holiday: Holiday): void {
    this.dialogData = holiday;

    /* this.httpClient.put(this.API_URL + holiday.id, holiday).subscribe(data => {
      this.dialogData = holiday;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteHoliday(id: number): void {
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

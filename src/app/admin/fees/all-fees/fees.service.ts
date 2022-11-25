import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fees } from './fees.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class FeesService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/fees.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Fees[]> = new BehaviorSubject<Fees[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Fees[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllFeess(): void {
    this.subs.sink = this.httpClient.get<Fees[]>(this.API_URL).subscribe(
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
  addFees(fees: Fees): void {
    this.dialogData = fees;

    /*  this.httpClient.post(this.API_URL, fees).subscribe(data => {
      this.dialogData = fees;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateFees(fees: Fees): void {
    this.dialogData = fees;

    /* this.httpClient.put(this.API_URL + fees.id, fees).subscribe(data => {
      this.dialogData = fees;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteFees(id: number): void {
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

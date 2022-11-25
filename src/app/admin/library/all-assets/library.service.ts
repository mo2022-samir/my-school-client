import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Library } from './library.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class LibraryService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/library.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Library[]> = new BehaviorSubject<Library[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Library[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllLibrarys(): void {
    this.subs.sink = this.httpClient.get<Library[]>(this.API_URL).subscribe(
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
  addLibrary(library: Library): void {
    this.dialogData = library;

    /*  this.httpClient.post(this.API_URL, library).subscribe(data => {
      this.dialogData = library;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateLibrary(library: Library): void {
    this.dialogData = library;

    /* this.httpClient.put(this.API_URL + library.id, library).subscribe(data => {
      this.dialogData = library;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteLibrary(id: number): void {
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

import { Injectable } from '@angular/core';
import { BehaviorSubject, shareReplay } from 'rxjs';
import { Library } from './library.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
@Injectable()
export class LibraryService extends UnsubscribeOnDestroyAdapter {
  apiURL = 'https://my-school.deta.dev/libirary';
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
    this.subs.sink = this.httpClient.get<Library[]>(this.apiURL).subscribe(
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
  getLibiraryById(id: any) {
    return this.httpClient
      .get<Library[]>(this.apiURL + `/${id}`)
      .pipe(shareReplay())
      .subscribe((data) => {
        this.dataChange.next(data);
      });
  }
  addLibrary(library: Library): void {
    this.dialogData = library;

    this.httpClient.post(this.apiURL, library).subscribe(
      (data) => {
        this.dialogData = library;
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
  updateLibrary(library: Library): void {
    this.dialogData = library;

    this.httpClient.put(this.apiURL + `/${library.id}`, library).subscribe(
      (data) => {
        this.dialogData = library;
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
  deleteLibrary(id: number): void {
    console.log(id);

    this.httpClient.delete(this.apiURL + `/${id}`).subscribe(
      (data) => {
        console.log(id);
      },
      (err: HttpErrorResponse) => {
        // error code here
      }
    );
  }
}

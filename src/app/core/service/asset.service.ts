import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Library } from 'src/app/admin/library/all-assets/library.model';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
apiURL = 'http://localhost:3000/libirary';
constructor(private http: HttpClient) { }

getLibrarysList() {
  return this.http.get<Library[]>(
    `${this.apiURL}`
  );
}
getLibraryById(id: string) {
  return this.http.get(`${this.apiURL}/${id}`);
}
addNewLibrary(library: Library) {
  return this.http.post(`${this.apiURL}`, library);
}
editLibrary(id: string, changes: any) {
  return this.http.put(this.apiURL + `/${id}`, changes);
}
deleteLibrary(id: string) {
  return this.http.delete(`${this.apiURL}${id}`);
}
}

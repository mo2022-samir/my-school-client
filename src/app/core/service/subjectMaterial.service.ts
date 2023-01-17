import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubjectMaterialService {
  constructor(private http: HttpClient) {}

  getMAterialList() {
    return this.http.get(`${environment.apiUrl}subjectsMaterial`);
  }
  getMaterialById(id: string) {
    return this.http.get(`${environment.apiUrl}subjectsMaterial/${id}`);
  }
  addNewMaterial(id, material: any) {
    return this.http.post(
      `${environment.apiUrl}subjectsMaterial/${id}`,
      material
    );
  }
  editMaterial(id: string, changes: any) {
    return this.http.put(
      environment.apiUrl + 'subjectsMaterial/' + id,
      changes
    );
  }
  deleteMaterial(id: string) {
    return this.http.delete(`${environment.apiUrl}subjectsMaterial/${id}`);
  }
}

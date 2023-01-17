/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubjectMaterialService } from './subjectMaterial.service';

describe('Service: SubjectMaterial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectMaterialService]
    });
  });

  it('should ...', inject([SubjectMaterialService], (service: SubjectMaterialService) => {
    expect(service).toBeTruthy();
  }));
});

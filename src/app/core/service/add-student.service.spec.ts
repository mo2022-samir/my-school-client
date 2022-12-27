/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddStudentService } from './add-student.service';

describe('Service: AddStudent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddStudentService]
    });
  });

  it('should ...', inject([AddStudentService], (service: AddStudentService) => {
    expect(service).toBeTruthy();
  }));
});

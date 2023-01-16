/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LibiraryService } from './libirary.service';

describe('Service: Libirary', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibiraryService]
    });
  });

  it('should ...', inject([LibiraryService], (service: LibiraryService) => {
    expect(service).toBeTruthy();
  }));
});

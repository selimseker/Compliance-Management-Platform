/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuditorService } from './auditor.service';

describe('Service: Auditor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuditorService]
    });
  });

  it('should ...', inject([AuditorService], (service: AuditorService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { OtherdataService } from './otherdata.service';

describe('OtherdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherdataService]
    });
  });

  it('should be created', inject([OtherdataService], (service: OtherdataService) => {
    expect(service).toBeTruthy();
  }));
});

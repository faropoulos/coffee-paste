import { TestBed, inject } from '@angular/core/testing';

import { AdminCompaniesService } from './admin-companies.service';

describe('AdminCompaniesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminCompaniesService]
    });
  });

  it('should be created', inject([AdminCompaniesService], (service: AdminCompaniesService) => {
    expect(service).toBeTruthy();
  }));
});

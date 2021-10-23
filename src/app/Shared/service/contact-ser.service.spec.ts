import { TestBed } from '@angular/core/testing';

import { ContactSerService } from './contact-ser.service';

describe('ContactSerService', () => {
  let service: ContactSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

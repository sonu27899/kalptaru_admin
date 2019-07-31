import { TestBed } from '@angular/core/testing';

import { ColourService } from './colour.service';

describe('ColourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColourService = TestBed.get(ColourService);
    expect(service).toBeTruthy();
  });
});

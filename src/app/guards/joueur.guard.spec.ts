import { TestBed } from '@angular/core/testing';

import { JoueurGuard } from './joueur.guard';

describe('JoueurGuard', () => {
  let guard: JoueurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JoueurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptLoanComponent } from './accept-loan.component';

describe('AcceptLoanComponent', () => {
  let component: AcceptLoanComponent;
  let fixture: ComponentFixture<AcceptLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

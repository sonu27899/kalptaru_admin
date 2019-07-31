import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawloanreqComponent } from './withdrawloanreq.component';

describe('WithdrawloanreqComponent', () => {
  let component: WithdrawloanreqComponent;
  let fixture: ComponentFixture<WithdrawloanreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawloanreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawloanreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

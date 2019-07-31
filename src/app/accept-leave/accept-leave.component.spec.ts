import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptLeaveComponent } from './accept-leave.component';

describe('AcceptLeaveComponent', () => {
  let component: AcceptLeaveComponent;
  let fixture: ComponentFixture<AcceptLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

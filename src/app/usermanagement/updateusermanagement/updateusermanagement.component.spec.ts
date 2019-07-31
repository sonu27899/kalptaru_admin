import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateusermanagementComponent } from './updateusermanagement.component';

describe('UpdateusermanagementComponent', () => {
  let component: UpdateusermanagementComponent;
  let fixture: ComponentFixture<UpdateusermanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateusermanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateusermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

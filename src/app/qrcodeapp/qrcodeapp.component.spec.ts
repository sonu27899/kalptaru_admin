import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeappComponent } from './qrcodeapp.component';

describe('QrcodeappComponent', () => {
  let component: QrcodeappComponent;
  let fixture: ComponentFixture<QrcodeappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodeappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

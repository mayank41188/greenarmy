import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSignupOtpComponent } from './employee-signup-otp.component';

describe('EmployeeSignupOtpComponent', () => {
  let component: EmployeeSignupOtpComponent;
  let fixture: ComponentFixture<EmployeeSignupOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSignupOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSignupOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

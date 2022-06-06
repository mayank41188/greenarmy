import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLoginErrorComponent } from './employee-login-error.component';

describe('EmployeeLoginErrorComponent', () => {
  let component: EmployeeLoginErrorComponent;
  let fixture: ComponentFixture<EmployeeLoginErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLoginErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLoginErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

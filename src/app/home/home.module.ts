import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeLoginOtpComponent } from './employee-login-otp/employee-login-otp.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeLoginErrorComponent } from './employee-login-error/employee-login-error.component';
import { EmployeeSignupComponent } from './employee-signup/employee-signup.component';
import { EmployeeSignupOtpComponent } from './employee-signup-otp/employee-signup-otp.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'employeeLogin',
    component: EmployeeLoginComponent,
  },
  {
    path: 'employeeLoginOtp',
    component: EmployeeLoginOtpComponent,
  },
  {
    path: 'employee',
    component: EmployeeProfileComponent,
  },
  {
    path: 'employeeLoginError',
    component: EmployeeLoginErrorComponent,
  },
  {
    path: 'employeeSignup',
    component: EmployeeSignupComponent,
  },
  {
    path: 'employeeSignupOtp',
    component: EmployeeSignupOtpComponent,
  },
];

@NgModule({
  declarations: [LandingPageComponent, EmployeeProfileComponent, EmployeeLoginComponent, EmployeeLoginOtpComponent, EmployeeLoginErrorComponent, EmployeeSignupComponent, EmployeeSignupOtpComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class HomeModule {}

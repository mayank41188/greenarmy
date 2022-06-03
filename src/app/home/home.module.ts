import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeLoginOtpComponent } from './employee-login-otp/employee-login-otp.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

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
];

@NgModule({
  declarations: [LandingPageComponent, EmployeeLoginComponent, EmployeeLoginOtpComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class HomeModule {}

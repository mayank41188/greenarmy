import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'employee',
    component: EmployeeProfileComponent,
  },
];

@NgModule({
  declarations: [LandingPageComponent, EmployeeProfileComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class HomeModule {}

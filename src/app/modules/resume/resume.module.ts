import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDashboardComponent } from './resume-dashboard/resume-dashboard.component';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: ResumeDashboardComponent }];

@NgModule({
  declarations: [ResumeDashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class ResumeModule {}

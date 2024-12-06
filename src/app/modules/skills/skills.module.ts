import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillDashboardComponent } from './skill-dashboard/skill-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';

const routes: Routes = [{ path: '', component: SkillDashboardComponent }];

@NgModule({
  declarations: [SkillDashboardComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
})
export class SkillsModule {}

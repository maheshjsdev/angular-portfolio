import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillDashboardComponent } from './skill-dashboard/skill-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SkillDashboardComponent }];

@NgModule({
  declarations: [SkillDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SkillsModule {}

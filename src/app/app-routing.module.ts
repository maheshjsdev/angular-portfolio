import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/profile', pathMatch:'full'},
  {path:'profile', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path:'project', loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule)},
  {path:'skill', loadChildren: () => import('./modules/skills/skills.module').then(m => m.SkillsModule)},
  // {path:'resume', loadChildren: () => import('./modules/resume/resume.module').then(m => m.ResumeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

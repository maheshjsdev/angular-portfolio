import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-resume-dashboard',
  standalone: false,
  templateUrl: './resume-dashboard.component.html',
  styleUrls: ['./resume-dashboard.component.scss'],
})
export class ResumeDashboardComponent {
  src = 'https://maheshjsdev.github.io/cv';
  constructor(private resumeServ: ResumeService) {}
}

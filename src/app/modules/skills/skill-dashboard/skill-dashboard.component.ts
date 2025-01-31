import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectService } from '../../project/project.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-skill-dashboard',
  standalone: false,
  templateUrl: './skill-dashboard.component.html',
  styleUrl: './skill-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillDashboardComponent {
  dataTable: boolean = false;
  skill: any = [
    { path: './assets/img/icons8-html-5.svg', alt: 'html' },
    { path: './assets/img/icons8-css3.svg', alt: 'css' },
    { path: './assets/img/bootstrap.svg', alt: 'bootstrap' },
    { path: './assets/img/icons8-javascript.svg', alt: 'javascript' },
    { path: './assets/img/jquery.svg', alt: 'jquery' },
    { path: './assets/img/angularjs.svg', alt: 'angular' },
    { path: './assets/img/icons8-nodejs.svg', alt: 'nodejs' },
  ];
  displayedColumns: string[] = ['id', 'proName', 'build'];
  dataSource = new MatTableDataSource();

  constructor(private _projectServ: ProjectService) {
    this.getProjectList();
  }

  getProjectList = () => {
    this.dataSource.data = this._projectServ.getAllProject();
    console.log(this.dataSource);
  };
  openNewProject = (id?: number) => {
    let getdata = this._projectServ
      .getAllProject()
      .find((x: any) => x.id === id);
    window.open(getdata.path);
  };

  getAlt = (ele?: string) => {
    this.dataTable = true;
    const filterValue = ele ? ele.trim().toLowerCase() : '';
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-dashboard',
  standalone: false,
  templateUrl: './project-dashboard.component.html',
  styleUrl: './project-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDashboardComponent {
  displayedColumns: string[] = ['id', 'proName', 'build'];
  constructor(private _projectServ: ProjectService) {
    this.getProjectList();
  }
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getProjectList = () => {
    this.dataSource.data = this._projectServ.getAllProject();
    console.log(this.dataSource);
  };
  openNewProject = (id?: number) => {
    let getdata = this._projectServ
      .getAllProject()
      .find((x: any) => x.id === id);
      window.open(getdata.path)
  };
}

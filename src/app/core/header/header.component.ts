import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ResumeDashboardComponent } from '../../modules/resume/resume-dashboard/resume-dashboard.component';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isDarkMode?: boolean;
  mobileWidthToggle: boolean = false;
  logoPath?: string;
  constructor(private _sharedServ: SharedService, private dialog: MatDialog) {}
  ngOnInit(): void {
    this.themeToggleFun();
  }
  menuToggle = () => {
    this.mobileWidthToggle = !this.mobileWidthToggle;
  };
  closeMenuRightbar = () => {
    this.mobileWidthToggle = !this.mobileWidthToggle;
  };
  changeTheme = () => {
    this.isDarkMode = !this.isDarkMode;
    const themeObject = { mode: this.isDarkMode };
    window.localStorage.setItem('themeMode', JSON.stringify(themeObject));
    this.themeToggleFun();
  };

  themeToggleFun = () => {
    const root = document.querySelector(':root') as HTMLElement;
    const theme = window.localStorage.getItem('themeMode');
    const parsedTheme = theme ? JSON.parse(theme) : null;
    if (parsedTheme.mode === true) {
      this._sharedServ.darkTheme.forEach((ele: any) => {
        root.style.setProperty(ele.colorVar, ele.colorCode);
      });
      this.isDarkMode = true;
      this.logoPath = './assets/img/mdlogoWhite.svg';
    } else {
      this._sharedServ.darkTheme.forEach((ele: any) => {
        root.style.removeProperty(ele.colorVar);
        this.isDarkMode = false;
        this.logoPath = './assets/img/mdlogo.svg';
      });
    }
  };
}

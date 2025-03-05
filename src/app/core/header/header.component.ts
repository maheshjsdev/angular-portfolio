import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
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
  logoPath: string = './assets/img/mdlogo.svg';
  constructor(
    private _sharedServ: SharedService,
    private dialog: MatDialog,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.themeToggleFun();
  }
  menuToggle = () => {
    this.mobileWidthToggle = !this.mobileWidthToggle;
    if (this.mobileWidthToggle) {
      this.renderer.addClass(document.body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(document.body, 'overflow-hidden');
    }
  };
  closeMenuRightbar = () => {
    this.mobileWidthToggle = !this.mobileWidthToggle;
    this.renderer.removeClass(document.body, 'overflow-hidden');
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.mobileWidthToggle = false;
      this.renderer.removeClass(document.body, 'overflow-hidden');
    }
  }
}

import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  darkTheme: any = [
    { id: '1', colorVar: '--bgColor', colorCode: '#0C1331' },
    { id: '2', colorVar: '--parimeryColor', colorCode: 'hsl(230, 28%, 12%)' },
    { id: '3', colorVar: '--textColor', colorCode: '#F5EBE0' },
    { id: '4', colorVar: '--menuColor', colorCode: '#fff' },
    { id: '5', colorVar: '--headerBg', colorCode: '#27374D' },
    { id: '6', colorVar: '--hoverColor', colorCode: '#04364A' },
    {
      id: '7',
      colorVar: '--borderColor',
      colorCode: 'rgba(255, 255, 255, 0.1)',
    },
    { id: '8', colorVar: '--selectColor', colorCode: '#30336b' },
    { id: '9', colorVar: '--tableBg', colorCode: '#080E28' },
    { id: '10', colorVar: '--hoverColor', colorCode: '#132EB1' },
    { id: '11', colorVar: '--headingFontFamily', colorCode: 'Londrina Shadow' },
    { id: '12', colorVar: '--letterSpace', colorCode: '6px' },
    // { id: '13', colorVar: '--cardBg', colorCode: '#fff' },
    { id: '14', colorVar: '--cardBorder', colorCode: '1px solid #fff' },
  ];
  setItem(value: string): void {
    localStorage.setItem('themeMode', JSON.stringify(this.darkTheme));
  }
}

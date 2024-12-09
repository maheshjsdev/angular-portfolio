import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: false,

  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  ngOnInit() {
    window.onload = () => {
      setTimeout(() => {
        const loader = document.getElementById('loaderBlock');
        if (loader) {
          loader.style.opacity = '0';
          setTimeout(() => (loader.style.display = 'none'), 200); 
        }
      }, 300); 
    };
  }
}

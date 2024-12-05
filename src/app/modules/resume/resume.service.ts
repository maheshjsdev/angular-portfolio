import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private pdfUrl = 'https://maheshjsdev.github.io/cv';
  constructor(private http: HttpClient) {}
 
}

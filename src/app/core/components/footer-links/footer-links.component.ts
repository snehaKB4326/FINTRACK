import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-links',
  imports: [],
  templateUrl: './footer-links.component.html',
  styleUrl: './footer-links.component.scss',
})
export class FooterLinksComponent {
  navigateToCorrectLink(type: 'linkedin' | 'github' | 'sourceCode'): void {
    const urls = {
      linkedin: '',
      github: '',
      sourceCode: '',
    };

    window.open(urls[type], '_blank');
  }
}

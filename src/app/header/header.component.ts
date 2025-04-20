import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isHoveringGitHub = false;
  isHoveringLinkedIn = false;
  isHoveringMail = false;
  isHoveringMenu = false;
  isGerman = false;
  isFirstSectionVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      this.isFirstSectionVisible = rect.top <= 0 && rect.bottom > 100;
    }
  }

  switchLanguage() {
    this.isGerman = !this.isGerman;
  }
}

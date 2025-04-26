import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { MenuOverlayComponent } from '../menu-overlay/menu-overlay.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuOverlayComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  isHoveringGitHub = false;
  isHoveringLinkedIn = false;
  isHoveringMail = false;
  isGerman = false;

  isFirstSectionVisible = true;
  @Input() isLightText!: boolean;

  isMenuOpen = false;

  private sectionObserver!: IntersectionObserver;

  ngAfterViewInit(): void {
    const sections = ['hero', 'imprint', 'privacy-policy']
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el); // Type narrowing
  
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === 'hero') {
            this.isFirstSectionVisible = entry.isIntersecting;
          }
          if (entry.target.id === 'imprint' || entry.target.id === 'privacy-policy') {
            this.isFirstSectionVisible = false;
          }
        }
      },
      {
        root: document.querySelector('.scroll-container'),
        threshold: 0.5,
      }
    );
  
    sections.forEach(section => this.sectionObserver.observe(section));
  }
  
  ngOnDestroy(): void {
    if (this.sectionObserver) this.sectionObserver.disconnect();
  }
  

  switchLanguage() {
    this.isGerman = !this.isGerman;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

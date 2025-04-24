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

  private heroObserver!: IntersectionObserver;

  ngAfterViewInit(): void {
    const hero = document.getElementById('hero');
    if (hero) {
      this.heroObserver = new IntersectionObserver(
        ([entry]) => {
          this.isFirstSectionVisible = entry.isIntersecting;
        },
        {
          root: document.querySelector('.scroll-container'),
          threshold: 0.5,
        }
      );
      this.heroObserver.observe(hero);
    }
  }

  ngOnDestroy(): void {
    if (this.heroObserver) this.heroObserver.disconnect();
  }

  switchLanguage() {
    this.isGerman = !this.isGerman;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

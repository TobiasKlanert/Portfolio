import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  isHoveringGitHub = false;
  isHoveringLinkedIn = false;
  isHoveringMail = false;
  isHoveringMenu = false;
  isGerman = false;
  isFirstSectionVisible = true;

  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    const hero = document.getElementById('hero');
    if (hero) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          this.isFirstSectionVisible = entry.isIntersecting;
        },
        {
          root: document.querySelector('.scroll-container'),
          threshold: 0.5,
        }
      );

      this.observer.observe(hero);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  switchLanguage() {
    this.isGerman = !this.isGerman;
  }
}

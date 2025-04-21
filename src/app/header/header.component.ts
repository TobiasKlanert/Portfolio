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
  isLightText = true;

  private heroObserver!: IntersectionObserver;
  private colorObserver!: IntersectionObserver;

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

    const sectionsToWatch = ['aboutMe', 'portfolio'];
    this.colorObserver = new IntersectionObserver(
      (entries) => {
        const anyLightSectionVisible = entries.some(
          (entry) => entry.isIntersecting
        );
        this.isLightText = !anyLightSectionVisible; // true = white, false = dark
      },
      {
        root: document.querySelector('.scroll-container'),
        threshold: 0.5,
      }
    );

    sectionsToWatch.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.colorObserver.observe(el);
    });
  }

  ngOnDestroy(): void {
    if (this.heroObserver) this.heroObserver.disconnect();
    if (this.colorObserver) this.colorObserver.disconnect();
  }

  switchLanguage() {
    this.isGerman = !this.isGerman;
  }
}

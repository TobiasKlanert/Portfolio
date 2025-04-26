import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  @Input() isLightText!: boolean;

  currentSection: string = 'hero';
  private positionObserver!: IntersectionObserver;
  sectionsToWatch = [
    'hero',
    'aboutMe',
    'skills',
    'work',
    'references',
    'contact',
  ];
  ngAfterViewInit(): void {
    const sectionElements = this.sectionsToWatch
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    this.positionObserver = new IntersectionObserver(
      (entries) => {
        let mostVisibleEntry: IntersectionObserverEntry | null = null;

        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!mostVisibleEntry ||
              entry.intersectionRatio > mostVisibleEntry.intersectionRatio)
          ) {
            mostVisibleEntry = entry;
          }
        }

        if (mostVisibleEntry?.target.id) {
          this.currentSection = mostVisibleEntry.target.id;
        }
      },
      {
        root: document.querySelector('.scroll-container') || null,
        threshold: 0.5,
      }
    );

    sectionElements.forEach((el) => this.positionObserver.observe(el));
  }

  ngOnDestroy(): void {
    if (this.positionObserver) {
      this.positionObserver.disconnect();
    }
  }
}

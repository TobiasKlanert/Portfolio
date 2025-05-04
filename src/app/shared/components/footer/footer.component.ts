import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  constructor(public translationService: TranslationService) {}

  private sectionObserver!: IntersectionObserver;

  isLightText = true;

  ngAfterViewInit(): void {
    const sections = ['contact', 'imprint', 'privacy-policy']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === 'contact') {
            this.isLightText = entry.isIntersecting;
          }
          if (
            entry.target.id === 'imprint' ||
            entry.target.id === 'privacy-policy'
          ) {
            this.isLightText = false;
          }
        }
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => this.sectionObserver.observe(section));
  }

  ngOnDestroy(): void {
    if (this.sectionObserver) this.sectionObserver.disconnect();
  }
}

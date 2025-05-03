import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { MenuOverlayComponent } from '../menu-overlay/menu-overlay.component';
import { TranslationService } from '../../../services/translation.service';
import { HostListener } from '@angular/core';

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
  isLegals = false;

  socialLinksVisible = false;
  pointerEventsDisabled = false;
  isBackgroundTransparant = true;

  isMenuOpen = false;

  private sectionObserver!: IntersectionObserver;

  constructor(public translationService: TranslationService) {
    this.setInitialVisibility();
  }

  ngOnInit() {
    const savedLang = localStorage.getItem('selectedLanguage');

    if (savedLang === 'de' || savedLang === 'en') {
      this.isGerman = savedLang === 'de';
      this.translationService.switchLanguage(savedLang);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === 'de' || browserLang === 'en') {
        this.isGerman = browserLang === 'de';
        this.translationService.switchLanguage(browserLang);
        localStorage.setItem('selectedLanguage', browserLang);
      } else {
        this.isGerman = false;
        this.translationService.switchLanguage('en');
        localStorage.setItem('selectedLanguage', 'en');
      }
    }

    this.setInitialVisibility();
  }

  private setInitialVisibility(): void {
    if (window.innerWidth < 768) {
      this.socialLinksVisible = false;
    } else {
      this.socialLinksVisible = true;
    }
  }

  @Input() isLightText!: boolean;

  @HostListener('window:resize', [])
  onResize() {
    this.setInitialVisibility();
  }

  ngAfterViewInit(): void {
    const sections = ['hero', 'imprint', 'privacy-policy']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === 'hero') {
            this.socialLinksVisible =
              entry.isIntersecting && window.innerWidth >= 768;
            this.pointerEventsDisabled = entry.isIntersecting;
          }
          if (
            entry.target.id === 'imprint' ||
            entry.target.id === 'privacy-policy'
          ) {
            this.isLegals = true;
            this.isBackgroundTransparant = false;
            this.pointerEventsDisabled = false;
          }
        }
      },
      {
        root: document.querySelector('.scroll-container'),
        threshold: 0.5,
      }
    );

    sections.forEach((section) => this.sectionObserver.observe(section));
  }

  ngOnDestroy(): void {
    if (this.sectionObserver) this.sectionObserver.disconnect();
  }

  changeLanguage() {
    this.isGerman = !this.isGerman;
    const lang = this.isGerman ? 'de' : 'en';
    this.translationService.switchLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

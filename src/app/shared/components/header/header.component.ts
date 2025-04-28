import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { MenuOverlayComponent } from '../menu-overlay/menu-overlay.component';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuOverlayComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {

  constructor(public translationService: TranslationService) {}

  isHoveringGitHub = false;
  isHoveringLinkedIn = false;
  isHoveringMail = false;
  isGerman = false;

  isFirstSectionVisible = true;
  isBackgroundTransparant = true;

  isMenuOpen = false;

  @Input() isLightText!: boolean;

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
            this.isBackgroundTransparant = false;
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

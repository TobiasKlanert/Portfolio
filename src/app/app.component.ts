import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('section') sections!: QueryList<ElementRef>;

  observer: IntersectionObserver;

  constructor(private renderer: Renderer2) {
    this.observer = new IntersectionObserver(this.onIntersection.bind(this), {
      threshold: 0.6, // 60% sichtbar
    });
  }

  ngAfterViewInit() {
    this.sections.forEach((section) =>
      this.observer.observe(section.nativeElement)
    );
  }

  onIntersection(entries: IntersectionObserverEntry[]) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const bgColor = entry.target.getAttribute('data-bg');
        if (bgColor) {
          this.renderer.setStyle(document.body, 'background-color', bgColor);
        }
      }
    }
  }
}

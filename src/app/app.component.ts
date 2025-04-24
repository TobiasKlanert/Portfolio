import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
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
export class AppComponent {

  isLightText = true;
  private colorObserver!: IntersectionObserver;

  ngAfterViewInit(): void {
    const sectionsToWatch = ['aboutMe', 'portfolio'];
    this.colorObserver = new IntersectionObserver(
      (entries) => {
        const anyLightSectionVisible = entries.some(
          (entry) => entry.isIntersecting
        );
        this.isLightText = !anyLightSectionVisible;
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
    if (this.colorObserver) this.colorObserver.disconnect();
  }
}

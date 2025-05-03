import { Component, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/components/header/header.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule,
      HeaderComponent,
      NavbarComponent,
      HeroComponent,
      AboutMeComponent,
      SkillsComponent,
      WorkComponent,
      ReferencesComponent,
      ContactComponent,
      FooterComponent
      ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  isLightText = true;
  isHeaderVisible: boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const heroSection = document.getElementById('hero');
    const heroBottom = heroSection?.getBoundingClientRect().bottom || 0;

    this.isHeaderVisible = heroBottom > 0;
  }

  private colorObserver!: IntersectionObserver;

  ngAfterViewInit(): void {
    const sectionsToWatch = ['aboutMe', 'work'];
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

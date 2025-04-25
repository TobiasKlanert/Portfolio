import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';

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
      ContactComponent
      ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  isLightText = true;
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

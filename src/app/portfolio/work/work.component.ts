import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  constructor(public translationService: TranslationService) {}

  currentProjectIndex = 0;

  projects = [
    {
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      github: 'https://github.com/TobiasKlanert/Join',
      liveLink: 'https://join.tobias-klanert.de',
      icon: '/assets/img/icon_join.svg',
      screenshot: '/assets/img/screenshot-join.png',
      bgColor: '#F9AF42',
      spinner: '/assets/img/spinning_shape.svg',
      linksActive: true,
    },
    {
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/TobiasKlanert/Sharkie',
      liveLink: 'https://sharkie.tobias-klanert.de',
      icon: '/assets/img/icon_shark.svg',
      screenshot: '/assets/img/screenshot-sharkie.png',
      bgColor: '#FF834F',
      spinner: '/assets/img/spinning_shape_yellow.svg',
      linksActive: true,
    },
    {
      technologies: ['HTML', 'CSS', 'Firebase', 'Angular', 'TypeScript'],
      github: 'https://github.com/TobiasKlanert',
      liveLink: 'https://dabubble.tobias-klanert.de',
      icon: '/assets/img/icon_dabubble.svg',
      screenshot: '/assets/img/screenshot-dabubble.png',
      bgColor: '#679AAC',
      spinner: '/assets/img/spinning_shape.svg',
      linksActive: false,
    },
  ];

  openLink(url: string) {
    if (this.projects[this.currentProjectIndex].linksActive) {
      window.open(url, '_blank');
    }
  }

  nextProject() {
    this.currentProjectIndex =
      (this.currentProjectIndex + 1) % this.projects.length;
  }

  previousProject() {
    this.currentProjectIndex =
      (this.currentProjectIndex - 1 + this.projects.length) %
      this.projects.length;
  }
}

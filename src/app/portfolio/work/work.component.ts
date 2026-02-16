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
      technologies: ['JavaScript', 'Firebase', 'Drag & Drop', 'HTML', 'CSS'],
      github: 'https://github.com/TobiasKlanert/Join',
      liveLink: 'https://join.tobias-klanert.de',
      icon: '/assets/img/icon_join.svg',
      screenshot: '/assets/img/screenshot-join.png',
      bgColor: '#F9AF42',
      spinner: '/assets/img/spinning_shape.svg',
      linksActive: true,
    },
    {
      technologies: ['JavaScript', 'OOP', 'HTML', 'CSS'],
      github: 'https://github.com/TobiasKlanert/Sharkie',
      liveLink: 'https://sharkie.tobias-klanert.de',
      icon: '/assets/img/icon_shark.svg',
      screenshot: '/assets/img/screenshot-sharkie.png',
      bgColor: '#FF834F',
      spinner: '/assets/img/spinning_shape_yellow.svg',
      linksActive: true,
    },
    {
      technologies: ['Angular', 'TypeScript', 'Firebase', 'Real-time Data'],
      github: 'https://github.com/TobiasKlanert/dabubble',
      liveLink: 'https://dabubble.tobias-klanert.de',
      icon: '/assets/img/icon_dabubble.svg',
      screenshot: '/assets/img/screenshot-dabubble.png',
      bgColor: '#679AAC',
      spinner: '/assets/img/spinning_shape.svg',
      linksActive: false,
    },
    {
      technologies: ['Django', 'DRF', 'Python', 'JWT Authentication'],
      github: 'https://github.com/TobiasKlanert/Coderr-Backend',
      liveLink: 'https://coderr.tobias-klanert.de',
      icon: '/assets/img/icon_coderr.svg',
      screenshot: '/assets/img/screenshot-coderr.png',
      bgColor: '#F9AF42',
      spinner: '/assets/img/spinning_shape.svg',
      linksActive: true,
    },
    {
      technologies: [
        'Django',
        'DRF',
        'Python',
        'FFmpeg',
        'Whisper',
        'Gemini API',
      ],
      github: 'https://github.com/TobiasKlanert/Quizly-Backend',
      liveLink: 'https://quizly.tobias-klanert.de',
      icon: '/assets/img/icon_quizly.png',
      screenshot: '/assets/img/screenshot-quizly.png',
      bgColor: '#FF834F',
      spinner: '/assets/img/spinning_shape_yellow.svg',
      linksActive: false,
    },
    {
      technologies: [
        'Django',
        'DRF',
        'PostgreSQL',
        'Redis',
        'Docker',
        'Python',
      ],
      github: 'https://github.com/TobiasKlanert/Videoflix-Backend',
      liveLink: 'https://videoflix.tobias-klanert.de',
      icon: '/assets/img/icon_videoflix.svg',
      screenshot: '/assets/img/screenshot-videoflix.png',
      bgColor: '#679AAC',
      spinner: '/assets/img/spinning_shape.svg',
      linksActive: true,
    },
  ];

  openLink(url: string) {
    window.open(url, '_blank');
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

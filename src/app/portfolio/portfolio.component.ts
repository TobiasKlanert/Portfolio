import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  currentProjectIndex = 0;

  projects = [
    {
      title: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'https://github.com/TobiasKlanert',
      liveLink: 'https://github.com/TobiasKlanert',
      icon: '/assets/img/icon_join.svg',
      screenshot: '/assets/img/screenshot-join.png',
      bgColor: '#F9AF42',
      spinner: '/assets/img/spinning_shape.svg',
    },
    {
      title: 'Sharkie',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description:
        'A simple Jump-and-Run game based on an object-oriented approach.',
      github: 'https://github.com/TobiasKlanert/Sharkie',
      liveLink: 'https://github.com/TobiasKlanert',
      icon: '/assets/img/icon_shark.svg',
      screenshot: '/assets/img/screenshot-sharkie.png',
      bgColor: '#FF834F',
      spinner: '/assets/img/spinning_shape_yellow.svg',
    },
    {
      title: 'DABubble',
      technologies: ['HTML', 'CSS', 'Firebase', 'Angular', 'TypeScript'],
      description:
        'This App is a Slack Clone. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization',
      github: 'https://github.com/TobiasKlanert',
      liveLink: 'https://github.com/TobiasKlanert',
      icon: '/assets/img/icon_dabubble.svg',
      screenshot: '/assets/img/screenshot-dabubble.png',
      bgColor: '#679AAC',
      spinner: '/assets/img/spinning_shape.svg',
    },
  ];

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

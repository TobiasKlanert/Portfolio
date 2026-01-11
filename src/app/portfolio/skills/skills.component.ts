import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  frontendSkills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS / SCSS',
  ];
  backendSkills = ['Django', 'Python', 'DRF', 'PostgreSQL', 'Docker'];

  constructor(public translationService: TranslationService) {}
}

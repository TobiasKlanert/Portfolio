import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  constructor(public translationService: TranslationService) {}

  references = [
    {
      name: 'Max Mustermann',
      link: 'https://de.linkedin.com/'
    },
    {
      name: 'Anna Beispiel',
      link: 'https://de.linkedin.com/'
    },
    {
      name: 'Lukas Schmidt',
      link: 'https://de.linkedin.com/'
    }
  ];
}

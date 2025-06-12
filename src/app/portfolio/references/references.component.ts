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
      name: 'Andreas Rux',
      link: 'https://www.linkedin.com/in/andreas-rux-51380218a/'
    },
    {
      name: 'Sophie Meyer',
      link: 'https://www.linkedin.com/in/sophie-meyer-2ab209170/'
    },
    {
      name: 'Milica Pesic',
      link: 'https://www.linkedin.com/in/milicapesic-mp/'
    }
  ];
}

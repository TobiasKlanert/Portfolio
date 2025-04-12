import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references = [
    {
      name: 'Max Mustermann',
      feedback: 'Die Zusammenarbeit mit dir war stets zuverlässig, kreativ und lösungsorientiert.',
      role: 'Teamleiter Frontend bei Musterfirma GmbH',
      link: 'https://de.linkedin.com/'
    },
    {
      name: 'Anna Beispiel',
      feedback: 'Besonders beeindruckt hat mich dein technisches Verständnis und deine Eigeninitiative.',
      role: 'Projektmanagerin bei Beispiel AG',
      link: 'https://de.linkedin.com/'
    },
    {
      name: 'Lukas Schmidt',
      feedback: 'Deine strukturierte Arbeitsweise und dein Designgefühl haben das Projekt enorm bereichert.',
      role: 'UX Designer bei DesignCo',
      link: 'https://de.linkedin.com/'
    }
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isHoveringGitHub = false;
  isHoveringLinkedIn = false;
  isHoveringMail = false;
  isHoveringMenu = false;
  isGerman = false;

  switchLanguage() {
    this.isGerman = !this.isGerman;
  }
}

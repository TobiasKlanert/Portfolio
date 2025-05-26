import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  showOverlay = false;

  constructor(public translationService: TranslationService) {}

  openOverlay() {
    this.showOverlay = true;
    console.log(this.showOverlay);
  }

  closeOverlay() {
    this.showOverlay = false;
  }
}

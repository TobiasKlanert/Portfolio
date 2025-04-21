import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-overlay',
  standalone: true,
  imports: [],
  templateUrl: './menu-overlay.component.html',
  styleUrl: './menu-overlay.component.scss',
})
export class MenuOverlayComponent {
  hoverStates: { [key: string]: boolean } = {
    aboutMe: false,
    skills: false,
    portfolio: false,
    references: false,
    contact: false,
  };

  @Output() close = new EventEmitter<void>();

  onMouseEnter(section: string) {
    this.hoverStates[section] = true;
  }

  onMouseLeave(section: string) {
    this.hoverStates[section] = false;
  }

  closeMenu() {
    this.close.emit();
  }
}

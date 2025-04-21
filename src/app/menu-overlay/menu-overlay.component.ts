import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-overlay',
  standalone: true,
  imports: [],
  templateUrl: './menu-overlay.component.html',
  styleUrl: './menu-overlay.component.scss'
})
export class MenuOverlayComponent {
  @Output() close = new EventEmitter<void>();

  closeMenu() {
    this.close.emit();
  }
}

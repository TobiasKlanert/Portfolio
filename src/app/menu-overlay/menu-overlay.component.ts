import { Component, EventEmitter, HostListener, Input, Output, ViewChild, ElementRef } from '@angular/core';

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

  @Input() isMenuOpen = false;  
  @Output() close = new EventEmitter<void>();
  @HostListener('document:click', ['$event'])
  

  onMouseEnter(section: string) {
    this.hoverStates[section] = true;
  }

  onMouseLeave(section: string) {
    this.hoverStates[section] = false;
  }

  closeMenu() {
    this.close.emit();
  }

  
onDocumentClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const clickedInside = this.menuElement?.nativeElement.contains(target);

  if (!clickedInside && this.isMenuOpen) {
    this.closeMenu();
  }
}

@ViewChild('menu', { static: true }) menuElement!: ElementRef;
}

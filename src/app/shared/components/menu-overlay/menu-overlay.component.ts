import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-menu-overlay',
  standalone: true,
  imports: [],
  templateUrl: './menu-overlay.component.html',
  styleUrl: './menu-overlay.component.scss',
})
export class MenuOverlayComponent {

  isHoveringGitHub = false;
  isHoveringLinkedIn = false;
  isHoveringMail = false;
  
  constructor(public translationService: TranslationService) {}

  hoverStates: { [key: string]: boolean } = {
    aboutMe: false,
    skills: false,
    work: false,
    references: false,
    contact: false,
  };

  @Input() isMenuOpen = false;
  @Output() close = new EventEmitter<void>();
  @ViewChild('menu', { static: true }) menuElement!: ElementRef;

  onMouseLeave(section: string) {
    this.hoverStates[section] = false;
  }

  closeMenu() {
    this.close.emit();
  }

  onMouseEnter(section: string) {
    this.hoverStates[section] = true;
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    console.log('Scroll to: ', el);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => {
      this.closeMenu();
    }, 750);
  }
  
  
  
  @HostListener('document:mousedown', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = this.menuElement?.nativeElement.contains(target);
  
    if (!clickedInside && this.isMenuOpen) {
      this.closeMenu();
    }
  }
  
}

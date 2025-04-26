import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LightTextService implements OnDestroy {
  private observer!: IntersectionObserver;
  private isLightTextSubject = new BehaviorSubject<boolean>(true);
  isLightText$ = this.isLightTextSubject.asObservable();

  initObserver(sections: string[], rootSelector: string, threshold = 0.5) {
    const root = document.querySelector(rootSelector);
    console.log('Root Element gefunden:', root);

    this.observer = new IntersectionObserver(
      (entries) => {
        console.log('Observer Entries:', entries);
        const anyLightSectionVisible = entries.some(
          (entry) => entry.isIntersecting
        );
        console.log('Any light section visible?', anyLightSectionVisible);
        this.isLightTextSubject.next(!anyLightSectionVisible);
      },
      {
        root,
        threshold,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      console.log(`Element ${id} gefunden:`, el);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }
}

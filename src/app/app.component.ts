import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private routerSub!: Subscription;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const navEnd = event as NavigationEnd;
        if (
          navEnd.urlAfterRedirects === '/imprint' ||
          navEnd.urlAfterRedirects === '/privacy-policy'
        ) {
          this.renderer.addClass(document.body, 'imprint-bg');
        } else {
          this.renderer.removeClass(document.body, 'imprint-bg');
        }
      });
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
    this.renderer.removeClass(document.body, 'imprint-bg');
  }
}

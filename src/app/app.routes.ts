import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Tobias Klanert — Web Developer',
  },
  {
    path: 'imprint',
    loadComponent: () => import('./pages/legal/imprint/imprint').then((m) => m.Imprint),
    title: 'Impressum — Tobias Klanert',
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/legal/privacy/privacy').then((m) => m.Privacy),
    title: 'Datenschutz — Tobias Klanert',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Seite nicht gefunden — Tobias Klanert',
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Seite nicht gefunden — Tobias Klanert',
  },
];

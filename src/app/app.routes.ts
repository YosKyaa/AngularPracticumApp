import { Routes } from '@angular/router';
import { HelloWorldComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: HelloWorldComponent,
    title: 'Home'
  },
  {
    path: 'article',
    loadComponent: () => import('./article/article').then((m) => m.Article),
    title: 'NgFor & Dynamic Lists'
  },
  {
    path: 'directives',
    loadComponent: () => import('./directive-practice').then((m) => m.DirectivePracticeComponent),
    title: 'Directive Playground'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

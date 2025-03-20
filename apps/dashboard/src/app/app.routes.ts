import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ivtm',
    loadChildren: () => import('ivtm/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'ibi',
    loadChildren: () => import('ibi/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

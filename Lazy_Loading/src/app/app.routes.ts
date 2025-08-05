import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'about',
    loadChildren: () => import('./pages/about/about-module').then(m => m.AboutModule)
  },

  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact-module').then(m => m.ContactModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile-module').then(m =>m.ProfileModule)
  },

  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings-module').then(m =>m.SettingsModule)
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'about', loadChildren: () => import('./pages/about/about-module').then(m => m.AboutModule) }, { path: 'contact', loadChildren: () => import('./pages/contact/contact-module').then(m => m.ContactModule) }, { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard-module').then(m => m.DashboardModule) }, { path: 'profile', loadChildren: () => import('./pages/profile/profile-module').then(m => m.ProfileModule) }, { path: 'settings', loadChildren: () => import('./pages/settings/settings-module').then(m => m.SettingsModule) }]; // 👈 THÊM DÒNG NÀY

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

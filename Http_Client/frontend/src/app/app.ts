import { Component } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegisterComponent],
  template: `<app-register></app-register>` // ✅ Gọi component
})
export class App {}

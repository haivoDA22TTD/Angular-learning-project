import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; //  Bắt buộc phải có
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule], //  Bắt buộc phải import FormsModule
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = ''; //  thêm dòng này nếu chưa có

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '123') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Sai tài khoản hoặc mật khẩu!');
    }
  }
}

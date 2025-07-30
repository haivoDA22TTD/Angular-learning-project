import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';  // ✅ Đường dẫn chuẩn theo cấu trúc bạn gửi

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [HeaderComponent]    //  Import component 
})
export class AppComponent {
  title = 'hello-angular';
}

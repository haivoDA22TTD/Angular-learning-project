import { Component } from '@angular/core';

@Component({
  selector: 'app-header',               //  Tên selector này gọi trong app.html
  standalone: true,                     //  Bắt buộc có
  templateUrl: './header.html',         //  Đường dẫn file HTML
  styleUrls: ['./header.css']           //  Đường dẫn file CSS
})
export class HeaderComponent {
    title = 'Learn Angular'; 
}         


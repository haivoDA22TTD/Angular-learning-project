import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//  Import 3 component  đã tạo
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component'
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent], //  Bắt buộc phải có
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'] 
})
export class MainLayoutComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}


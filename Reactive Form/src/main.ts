import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // <- Import đúng tên class

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

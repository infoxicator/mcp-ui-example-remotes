// angular-mounter.ts
import 'zone.js'; // Add Zone.js first
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

export default function mountAngularApp(element: HTMLElement) {
  // Create a custom element inside the target
  const angularRoot = document.createElement('app-root');
  element.appendChild(angularRoot);
  
  return bootstrapApplication(AppComponent, appConfig);
}

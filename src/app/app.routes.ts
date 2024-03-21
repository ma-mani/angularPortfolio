import { Routes } from '@angular/router';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Portfolio HomePage',
  },
  {
    path: 'aboutme',
    component: AboutmeComponent,
    title: 'Portfolio About me',
  },
  {
    path: 'cv',
    component: CvComponent,
    title: 'Portfolio CV',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Portfolio Contact',
  },
  {
    path: '**',
    component: HomeComponent,
    title: 'Portfolio HomePage',
    pathMatch: 'full',
  },
];

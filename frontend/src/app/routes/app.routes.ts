import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PatherrorComponent } from '../cores/components/patherror/patherror.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { MoviesComponent } from '../components/movies/movies.component';
import { SeriesComponent } from '../components/series/series.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    // Add id or user_name
    path: 'dashboard',
    // This will be lazy loaded
    component: DashboardComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: '**',
    component: PatherrorComponent,
  },
];

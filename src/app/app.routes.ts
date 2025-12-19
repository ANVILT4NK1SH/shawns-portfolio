import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Briefli } from './pages/briefli/briefli';

export const routes: Routes = [
  {path: '', component: Home, pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'projects', component: Projects},
  {path: 'briefli', component: Briefli}
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies/movies.component';

const routes: Routes = [
  {
  
    path: 'movies/genres/:id',
   component: MoviesComponent,
 },
  {
    path:"",
    component:HomeComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MovieComponent} from "./components/movie/movie.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";

export const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
  },
  { path: 'movie/:id',
    component: MovieDetailComponent,
  }

];

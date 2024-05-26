import {Component, OnInit} from '@angular/core';
import {MovieService} from "./movie.service";
import {Movie, MoviesResponse} from "../../models/movie.models";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    MdbFormsModule,
    MdbRippleModule,
    RouterLink,
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit{
  movies: Movie[] = [];
  search: string = 'harry';

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(): void {
    this.movieService
      .getMovies(this.search)
      .subscribe((moviesResponse: MoviesResponse): void => {
      console.log(moviesResponse);
      this.movies = moviesResponse.Search
    });
  }


}

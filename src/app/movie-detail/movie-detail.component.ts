import {Component, OnInit} from '@angular/core';
import {MovieDetailService} from "./movie-detail.service";
import {MovieDetails} from "../models/movie.models";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";
import {MdbRippleModule} from "mdb-angular-ui-kit/ripple";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    RouterLink,
    MdbFormsModule,
    MdbRippleModule,
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {
  search: string = 'tt3896198';
  movieDetail: MovieDetails = {
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    Ratings: [],
    Metascore: '',
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Website: '',
    Response: ''
  };



  constructor(
    private movieDetailService: MovieDetailService
  ) { }


  ngOnInit():void {
    
    this.getMovieDetail()
  }


  getMovieDetail(): void{
    this.movieDetailService.getMovieDetail(this.search)
      .subscribe((movieDetail: MovieDetails):void =>{
      console.log(movieDetail);
      this.movieDetail = movieDetail;
    });

  }

}



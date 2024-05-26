import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieDetails} from "../models/movie.models";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {
  private apiKey: string = '1849f251'
  private domain: string = 'http://www.omdbapi.com'

  constructor(private http: HttpClient) { }

getMovieDetail(id:string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.domain}/?apikey=${this.apiKey}&i=${id}`)
}

}

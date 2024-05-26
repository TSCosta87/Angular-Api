import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MoviesResponse} from "../../models/movie.models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey: string = '1849f251'
  private domain: string = 'http://www.omdbapi.com'

  constructor(private http: HttpClient) { }

  getMovies(search: string):Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${this.domain}/?apikey=${this.apiKey}&s=${search}`)
  }


}

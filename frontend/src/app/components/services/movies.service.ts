import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { moviesListData } from '../../fixtures/movies.fixture';
import { BehaviorSubject } from 'rxjs';
import { MCMovie } from '../../fixtures/dataType';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movieList!: MCMovie[];
  private movieListBS = new BehaviorSubject(this.movieList);
  movieList$ = this.movieListBS.asObservable();

  // Currently Not Needed
  // private _http = inject(HttpClient)

  // Get The Whole Movie List
  // If We Use API -- We Have To Use A Function
  getMoviesList() {
    this.movieList = moviesListData;

    // Fix this portion where movie is currently undefined
  }

  // Get A Specific Movie By Its' Id Upon Clicked
  getMovieById(id: string) {}
}

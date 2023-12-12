import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { moviesListData } from '../../fixtures/movies.fixture';
import { BehaviorSubject } from 'rxjs';
import { MCMovie } from '../../fixtures/dataType';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movieList!: MCMovie[];
  private movieListBS = new BehaviorSubject(this.movieList);
  public movieList$ = this.movieListBS.asObservable();

  movieLSignal = toSignal(this.movieList$, {
    initialValue: [],
  });

  // Currently Not Needed
  // private _http = inject(HttpClient)

  // Get The Whole Movie List
  // If We Use API -- We Have To Use A Function
  getMoviesList() {
    this.movieList = moviesListData;
    this.movieListBS.next(this.movieList);
  }

  // Get A Specific Movie By Its' Id Upon Clicked
  getMovieById(id: string) {}
}

import { Component, inject } from '@angular/core';
import { MoviesService } from '../../cores/services/movies.service';
import { MCMovie } from '../../fixtures/dataType';
import { Subscription } from 'rxjs';
import { FilmListComponent } from '../../cores/components/film-list/film-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilmListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private _movieService = inject(MoviesService);
  private movieSub!: Subscription;
  
  public movieList!: MCMovie[];

  constructor() {
    this._movieService.getMoviesList();
    this.movieSub = this._movieService.movieList$.subscribe(
      (movieData: any) => {
        this.movieList = movieData;
      }
    );
  }

  ngOnDestory() {
    if (this.movieSub) {
      this.movieSub.unsubscribe();
    }
  }
}

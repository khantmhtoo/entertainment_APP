import { Component, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';
import { MCMovie } from '../../../fixtures/dataType';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.scss',
})
export class MovielistComponent {
  private _movieService = inject(MoviesService);

  public movieList!: MCMovie[];

  ngOnInit() {
    this._movieService.getMoviesList();
    this._movieService.movieList$.subscribe((data: MCMovie[]) => {
      console.log(data)
      this.movieList = data;
    });
    console.log(this.movieList);
  }
}

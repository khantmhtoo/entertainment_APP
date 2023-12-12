import { Component, Input } from '@angular/core';
import { MCMovie } from '../../../fixtures/dataType';
import { FilmComponent } from '../film/film.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [FilmComponent, CommonModule],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss',
})
export class FilmListComponent {
  @Input() movies!: MCMovie[] | any;

  onFilmDetail(movieId: any) {
    console.log(movieId);
  }
}

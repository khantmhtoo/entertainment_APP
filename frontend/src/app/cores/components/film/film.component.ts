import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MCMovie } from '../../../fixtures/dataType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss',
})
export class FilmComponent {
  @Input() movieData!: MCMovie | any;
  @Output() filmData = new EventEmitter<string>();

  sendFilmId() {
    this.filmData.emit(this.movieData._id);
  }
}

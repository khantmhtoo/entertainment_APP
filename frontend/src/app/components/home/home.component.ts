import { Component } from '@angular/core';
import { MovielistComponent } from '../movie_module/movielist/movielist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovielistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

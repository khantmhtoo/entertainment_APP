import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navItems: any = [
    { alt: "all_list", path: '../../../assets/4Dash.png'},
    { alt: "movie_list", path: '../../../assets/Movie.png'},
    { alt: "series_list", path: '../../../assets/4Dash.png'},
    { alt: "bookmarked", path: '../../../assets/Marked.png'},
  ]

  private _router = inject(Router)
}

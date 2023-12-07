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
    { alt: "all_list", path: 'pi-th-large'},
    { alt: "movie_list", path: 'pi-stop'},
    { alt: "series_list", path: 'pi-video'},
    { alt: "bookmarked", path: 'pi-bookmark-fill'},
  ]

  private _router = inject(Router)
}

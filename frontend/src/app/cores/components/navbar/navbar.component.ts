import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { MTheme } from '../../models/theme.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private _theme = inject(ThemeService)

  public navItems: any = [
    { alt: 'all_list', path: 'pi-th-large' },
    { alt: 'movie_list', path: 'pi-stop' },
    { alt: 'series_list', path: 'pi-video' },
    { alt: 'bookmarked', path: 'pi-bookmark-fill' },
  ];
  public _router = inject(Router);
  public currThemeDark: MTheme = this._theme.themeSignal();
}

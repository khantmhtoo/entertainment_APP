import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './cores/components/navbar/navbar.component';
import { ThemeService } from './cores/services/theme.service';
import { MTheme } from './cores/models/theme.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _theme = inject(ThemeService);
  public darkTheme: MTheme = this._theme.themeSignal();

  constructor() {
    this._theme.cacheThemeCheck();
  }

  // Click Event To Change The Overall Theme
  changeTheme() {
    this._theme.updateTheme();
  }
}

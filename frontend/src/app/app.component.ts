import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './cores/components/navbar/navbar.component';
import { ThemeService } from './cores/services/theme.service';
import { MTheme } from './cores/models/theme.model';
import { debounceTime } from 'rxjs';

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

  searchTerm = '';
  items: any[] = [
    /* your data array */
  ];
  filteredItems: any[] = this.items;
  private searchSubject = new Subject<string>();

  constructor() {
    this._theme.cacheThemeCheck();
    this.searchSubject.pipe(debounceTime(300)).subscribe((searchTerm: any) => {
      this.filteredItems = this.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }

  onSearch(event: KeyboardEvent): void {
    this.searchSubject.next((event.target as HTMLInputElement).value);
  }

  // Click Event To Change The Overall Theme
  changeTheme() {
    this._theme.updateTheme();
  }
}

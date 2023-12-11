import { Injectable } from '@angular/core';
import { MTheme } from '../models/theme.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Change the variable to model variable afterwards
  private themeDark = new MTheme();
  private themeDarkBS = new BehaviorSubject<MTheme>(this.themeDark);
  private themeDark$ = this.themeDarkBS.asObservable();

  public themeSignal = toSignal(this.themeDark$, {
    initialValue: new MTheme(),
  });

  // Check For LocalStorage - Current Theme (T/F) And Changes Based On That Theme
  cacheThemeCheck() {
    if (localStorage.getItem('currTheme')) {
      const themeCache =
        localStorage.getItem('currTheme') === 'true' ? true : false;
      this.themeDark.prevCacheTheme(themeCache);
    }
  }

  // Updates The Theme To Dark Or Light Mode
  updateTheme() {
    console.log('Updated');
    this.themeDark.updateTheme();
  }
}

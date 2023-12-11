export type MCTheme = boolean;

export class MTheme {
  themeDark: boolean = true;

  // Get The Current Theme Mode
  getTheme() {
    return this.themeDark;
  }

  prevCacheTheme(theme: boolean) {
    this.themeDark = theme;
  }

  // Update The Theme To Light Mode
  updateTheme() {
    this.themeDark = !this.themeDark;
    let storedTheme = JSON.stringify(this.themeDark);
    localStorage.setItem('currTheme', storedTheme);
  }
}

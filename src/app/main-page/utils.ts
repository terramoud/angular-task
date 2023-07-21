export class Utils {
  public static resetCurrentPageNumber(): void {
    localStorage.setItem('currentPageNumber', '1');
  }
}

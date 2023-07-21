export class Page {
  private number: string;
  private classList: string;

  constructor(pageNumber: string, classList: string) {
    this.number = pageNumber;
    this.classList = classList;
  }

  public getNumber(): string {
    return this.number;
  }

  public setNumber(pageNumber: string) {
    this.number = pageNumber;
  }

  public getClassList(): string {
    return this.classList;
  }

  public setClassList(classList: string) {
    this.classList = classList;
  }
}

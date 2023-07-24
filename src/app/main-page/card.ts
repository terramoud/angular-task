export class Card {
  private id: number;
  private name: string;
  private description: string;
  private expireTime: string;
  private price: string;
  private createdDate: number;
  private category: string;
  private pageNumber: number;

  constructor() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.expireTime = "";
    this.price = "";
    this.createdDate = 0;
    this.category = "";
    this.pageNumber = 0;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string): void {
    this.name = value;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(value: string): void {
    this.description = value;
  }

  public getExpireTime(): string {
    return this.expireTime;
  }

  public setExpireTime(value: string): void {
    this.expireTime = value;
  }

  public getPrice(): string {
    return this.price;
  }

  public setPrice(value: string): void {
    this.price = value;
  }

  public getCreatedDate(): number {
    return this.createdDate;
  }

  public setCreatedDate(value: number): void {
    this.createdDate = value;
  }

  public getCategory(): string {
    return this.category;
  }

  public setCategory(value: string): void {
    this.category = value;
  }

  public getPageNumber(): number {
    return this.pageNumber;
  }

  public setPageNumber(value: number): void {
    this.pageNumber = value;
  }
}

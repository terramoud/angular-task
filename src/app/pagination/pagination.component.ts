import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Page} from "./page";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pages: Page[];
  @Output() pageButtonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.pages = new Array<Page>();
  }

  onPageButtonClick(pageNumber: string): void {
    this.pageButtonClick.emit(pageNumber);
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  @Input() category: string;
  @Output() categoryClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.category = "";
  }

  onCategoryClick(categoryName: string) {
    this.categoryClick.emit(categoryName);
  }
}

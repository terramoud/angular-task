import {Component, Input} from '@angular/core';
import {Card} from "../main-page/card";

@Component({
  selector: 'app-sidebar-card',
  templateUrl: './sidebar-card.component.html',
  styleUrls: ['./sidebar-card.component.scss']
})
export class SidebarCardComponent {
  @Input() card: Card;

  constructor() {
    this.card = new Card();
  }
}

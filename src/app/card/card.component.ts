import {Component, Input} from '@angular/core';
import {Card} from "../main-page/card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card;

  constructor() {
    this.card = new Card();
  }

}

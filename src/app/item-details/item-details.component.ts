import {Component} from '@angular/core';
import {Card} from "../main-page/card";
import {ActivatedRoute} from "@angular/router";
import {CardService} from "../main-page/card-service";
import {StarterDataGenerator} from "../main-page/starter-data-generator";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  public card: Card;
  public isCardExists: boolean;
  private route: ActivatedRoute;
  private cardService: CardService;

  constructor(route: ActivatedRoute) {
    this.route = route;
    this.cardService = new CardService();
    this.card = new Card();
    this.isCardExists = true;
  }

  ngOnInit() {
    const starterDataGenerator: StarterDataGenerator = new StarterDataGenerator();
    starterDataGenerator.clearAndFillLocalStorage();

    this.route.paramMap.subscribe(params => {
      const id: number = Number(params.get('id'));
      if (isNaN(id)) {
        this.isCardExists = false;
        throw new Error(`Invalid id='${id}'. The request "id" must be a valid number`);
      }
      const obtainedCard = this.cardService.getCardById(id);
      if (obtainedCard === null) {
        this.isCardExists = false;
        throw new Error(`The product with id=${id} is not exists`);
      }
      this.card = obtainedCard;
    });
  }
}

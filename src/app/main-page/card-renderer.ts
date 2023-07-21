import {Constants} from "./constants";
import {Card} from "./card";

export class CardRenderer {

  constructor() {
  }

  public fetchCards(): Card[] {
    const searchQuery: string = localStorage.getItem('searchQuery') ?? "";
    let category: string = localStorage.getItem('category') ?? "all";
    let currentPage: number = Number(localStorage.getItem('currentPageNumber')) || 1;
    let jsonCards: any = JSON.parse(localStorage.getItem('cards') || '');
    if (!jsonCards || !Array.isArray(jsonCards) || jsonCards.length === 0) {
      return [];
    }
    // Recreate Card objects with parsed properties
    let cards: Card[] = jsonCards.map((cardData: any) => {
      const card = new Card();
      card.setName(cardData.name);
      card.setDescription(cardData.description);
      card.setExpireTime(cardData.expireTime);
      card.setPrice(cardData.price);
      card.setCreatedDate(cardData.createdDate);
      card.setCategory(cardData.category);
      card.setPageNumber(cardData.pageNumber);
      return card;
    });
    if (category !== "all") {
      cards = cards.filter((card: Card) => card.getCategory() === category);
    }
    if (searchQuery !== "") {
      cards = cards.filter((card: Card) =>
        card.getName().toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.getDescription().toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    CardRenderer.injectPaginationToCardList(cards);
    return cards.filter(card => +card.getPageNumber() === currentPage);
  }

  private static injectPaginationToCardList(cardsList: Card[]): Card[] {
    for (let i = 0; i < cardsList.length; i++) {
      cardsList[i].setPageNumber(Math.ceil(i / Constants.LIMIT_CARDS_PER_PAGE) || 1);
    }
    const lastCard: Card | undefined = cardsList.at(-1);
    if (!lastCard) {
      localStorage.setItem('totalPages', "1");
      return cardsList;
    }
    localStorage.setItem('totalPages', String(lastCard.getPageNumber()));
    return cardsList;
  }

  public renderCards(cards: Card[]): void {
    for (let i = 0; i < cards.length; i++) {
      const card: HTMLElement = document.createElement("div");
      card.classList.add("card");
      card.innerHTML =
        `<div class="card-image"></div>
            <div class="card-sections-wrapper">
                <div class="card-section">
                    <div class="card-name">${cards[i].getName()}</div>
                    <div class="card-like-button">
                        <span class="material-icons">favorite</span>
                    </div>
                </div>
                <div class="card-section">
                    <div class="card-description">${cards[i].getDescription()}</div>
                    <div class="card-expire-time">${cards[i].getExpireTime()}</div>
                </div>
                <div class="card-section">
                    <div class="card-price">${cards[i].getPrice()}</div>
                    <button class="button-cancel add-to-card">Add to Cart</button>
                </div>
            </div>`;
      const cardContainer: HTMLElement | null = document.querySelector(".coupon-card-wrapper");
      if (!cardContainer) {
        throw new Error("tag with class='coupon-card-wrapper' isn't exists")
      }
      cardContainer.appendChild(card);
    }
  }

  public getNextCards(): Card[] {
    let currentPage: number = Number(localStorage.getItem('currentPageNumber')) || 1;
    let totalPages: number = Number(localStorage.getItem('totalPages')) || 1;
    let nextPage: number = currentPage + 1;
    if (nextPage > totalPages) {
      return [];
    }
    localStorage.setItem('currentPageNumber', String(nextPage));
    return this.fetchCards();
  }

  public updateDisplayedItems(cards: Card[]): void {
    const cardContainer: HTMLElement | null = document.querySelector(".coupon-card-wrapper");
    if (!cardContainer) {
      throw new Error("tag with class='coupon-card-wrapper' isn't exists")
    }
    cardContainer.innerHTML = '';
    this.renderCards(cards);
  }
}

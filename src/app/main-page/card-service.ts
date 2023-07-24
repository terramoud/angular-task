import {Constants} from "./constants";
import {Card} from "./card";

export class CardService {

  constructor() {
  }

  public fetchCards(): Card[] {
    const searchQuery: string = localStorage.getItem('searchQuery') ?? "";
    let category: string = localStorage.getItem('category') ?? "all";
    let currentPage: number = Number(localStorage.getItem('currentPageNumber')) || 1;
    let cards: Card[] = this.getAllCards();
    if (category !== "all") {
      cards = cards.filter((card: Card) => card.getCategory() === category);
    }
    if (searchQuery !== "") {
      cards = cards.filter((card: Card) =>
        card.getName().toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.getDescription().toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    CardService.injectPaginationToCardList(cards);
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

  public getCardById(id: number): Card | null {
    const card = this.getAllCards().find(card => card.getId() === id);
    return card ?? null;
  }

  private getAllCards(): Card[] {
    let jsonCards: any = JSON.parse(localStorage.getItem('cards') || '');
    if (!jsonCards || !Array.isArray(jsonCards) || jsonCards.length === 0) {
      return [];
    }
    // Recreate Card objects with parsed properties
    return jsonCards.map((cardData: any) => {
      const card = new Card();
      card.setId(cardData.id);
      card.setName(cardData.name);
      card.setDescription(cardData.description);
      card.setExpireTime(cardData.expireTime);
      card.setPrice(cardData.price);
      card.setCreatedDate(cardData.createdDate);
      card.setCategory(cardData.category);
      card.setPageNumber(cardData.pageNumber);
      return card;
    });
  }
}

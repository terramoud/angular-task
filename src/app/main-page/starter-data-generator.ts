import {Constants} from './constants';
import {Card} from "./card";

export class StarterDataGenerator {

  constructor() {
  }

  public clearAndFillLocalStorage(): void {
    const existingCards: string | null = localStorage.getItem('cards');
    const existingCurrentPage: string | null = localStorage.getItem('currentPageNumber');
    const existingTotalPages: string | null = localStorage.getItem('totalPages');
    if (!existingCards || !existingCurrentPage || !existingTotalPages) {
      localStorage.clear();
      localStorage.setItem('currentPageNumber', '1');
      localStorage.setItem('searchQuery', "");
      localStorage.setItem('category', "all");
      let arrayCards: Array<Card> = StarterDataGenerator.getRandomCards();
      let cards: Array<Card> = StarterDataGenerator.sortByCreatedDateInDesc(arrayCards);
      let cardsJSON: string = JSON.stringify(cards);
      localStorage.setItem("cards", cardsJSON);
      console.log('LocalStorage has been cleared and filled with random cards.');
    } else {
      console.log('LocalStorage already contains data. Skipping clearing and filling process.');
    }
  }

  private static sortByCreatedDateInDesc(array: Array<Card>): Array<Card> {
    return array.sort((a, b) => b.getCreatedDate() - a.getCreatedDate());
  }

  private static getRandomCards(): Array<Card> {
    let randomCards: Array<Card> = [];
    for (let i = 0; i < Constants.NUMBER_GENERATED_CARDS; i++) {
      let randomIndex: number = Math.floor(Math.random() * Constants.CATEGORIES.length);
      let card: Card = StarterDataGenerator.generateRandomCard(i, Constants.CATEGORIES[randomIndex]);
      card.setPageNumber(Math.ceil(i / Constants.LIMIT_CARDS_PER_PAGE) || 1);
      randomCards.push(card);
    }
    return randomCards;
  }

  private static generateRandomCard(id: number, category: string): Card {
    let card: Card = new Card();
    card.setName(`Coupon${id} ${StarterDataGenerator.getRandomWords(2)}`);
    card.setDescription(StarterDataGenerator.getRandomWords(3));
    card.setExpireTime("Expires in " + Math.floor(Math.random() * 10) + " days");
    card.setPrice(Math.floor(Math.random() * 500).toString());
    card.setCreatedDate(new Date().getTime() + (id * 100));
    card.setCategory(category);
    return card;
  }

  private static getRandomWords(count: number): string {
    const arrayWords: Array<string> = [
      'apple', 'banana', 'carrot', 'dog', 'elephant', 'fish', 'grape', 'horse', 'ice', 'cream', 'jacket',
      'kiwi', 'lemon', 'mango', 'nut', 'orange', 'pear', 'quinoa', 'raspberry', 'strawberry', 'tomato',
      'umbrella', 'violet', 'watermelon', 'xylophone', 'yogurt', 'zebra', 'almond', 'broccoli', 'cucumber',
      'dragonfruit', 'eggplant', 'fig', 'garlic', 'honeydew', 'ice', 'jackfruit', 'kale', 'lime', 'melon',
      'nectarine', 'olive', 'pepper', 'quince', 'radish', 'spinach', 'tangerine', 'ugli', 'fruit', 'vanilla',
      'watercress', 'xigua', 'yam', 'zucchini', 'avocado', 'blueberry', 'cherry', 'date', 'elderberry',
      'feijoa', 'grapefruit', 'huckleberry', 'itapopo', 'jabuticaba', 'kiwifruit', 'lemonade', 'mangosteen',
      'nance', 'olallieberry', 'papaya', 'quince', 'rambutan', 'soursop', 'tamarind', 'ugni', 'vavai',
      'white', 'currant', 'ximenia', 'yellow', 'passionfruit', 'zhe'
    ];
    let words: string = '';
    for (let i = 0; i < count; i++) {
      let randomIndex: number = Math.floor(Math.random() * arrayWords.length);
      words += arrayWords[randomIndex] + " ";
    }
    return words;
  }
}

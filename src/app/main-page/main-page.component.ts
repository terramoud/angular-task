import {Component, OnInit} from '@angular/core';
import {StarterDataGenerator} from "./starter-data-generator";
import {Constants} from "./constants";
import {debounce} from 'lodash';
import {CardService} from "./card-service";
import {PaginationCreator} from "./pagination-creator";
import {Utils} from "./utils";
import {Card} from "./card";
import {Page} from "../pagination/page";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  private cardRenderer: CardService;
  private pagination: PaginationCreator;
  public categories: string[];
  public cards: Card[];
  public pages: Page[];

  constructor() {
    this.cardRenderer = new CardService();
    this.pagination = new PaginationCreator();
    this.categories = Constants.CATEGORIES;
    this.cards = [];
    this.pages = [];
  }

  ngOnInit(): void {
    history.scrollRestoration = 'manual';
    const starterDataGenerator: StarterDataGenerator = new StarterDataGenerator();
    starterDataGenerator.clearAndFillLocalStorage();

    window.addEventListener('load', () => {
      this.returnToLastScrollPositionAfterReopenPage();
    });

    const debouncedScrollHandler: any = debounce(() => {
      this.handleScroll()
    }, Constants.DELAY_BETWEEN_THROTTLING);
    window.addEventListener("scroll", () => {
      debouncedScrollHandler();
    })

    const searchInput: any = document.getElementById('search-input');
    const debouncedSearchHandler: any = debounce(() => {
      this.handleSearch()
    }, Constants.DELAY_BETWEEN_THROTTLING);
    searchInput.addEventListener('input', () => {
      debouncedSearchHandler()
    });

    const categoriesDropdown: any = document.querySelector('.categories-dropdown');
    categoriesDropdown.addEventListener('change', (event: any) => {
      const category: string = event.target.value;
      this.loadCardsForClickedCategory(category);
    });
  }

  private handleScroll(): void {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      this.cards = [...this.cards, ...this.cardRenderer.getNextCards()];
      this.pages = this.pagination.generatePagination();
    }
  }

  private handleSearch(): void {
    Utils.resetCurrentPageNumber();
    const searchInput: any = document.getElementById('search-input');
    if (!searchInput) {
      throw new Error("tag with class='search-input' isn't exists")
    }
    const query: string = searchInput.value.trim();
    localStorage.setItem('searchQuery', query);
    this.updatePageContent();
  }

  private loadCardsForClickedCategory(categoryName: string): void {
    Utils.resetCurrentPageNumber();
    localStorage.setItem('searchQuery', "");
    localStorage.setItem('category', categoryName);
    this.updatePageContent();
  }

  private returnToLastScrollPositionAfterReopenPage(): void {
    const searchQuery: string = localStorage.getItem('searchQuery') ?? "";
    if (searchQuery !== "") {
      localStorage.setItem('searchQuery', "");
      Utils.resetCurrentPageNumber();
    }
    const category: string = localStorage.getItem('category') ?? "all";
    if (category !== "all") {
      localStorage.setItem('category', "all");
      Utils.resetCurrentPageNumber();
    }
    this.updatePageContent();
  }

  private updatePageContent(): void {
    window.scrollTo({top: Constants.TOP_OF_PAGE, behavior: 'smooth'});
    this.cards = this.cardRenderer.fetchCards();
    this.pages = this.pagination.generatePagination();
  }

  onPageButtonClick(pageNumber: string): void {
    localStorage.setItem('currentPageNumber', pageNumber);
    this.updatePageContent();
  }

  onCategoryClick(categoryName: string) {
    this.loadCardsForClickedCategory(categoryName);
  }
}

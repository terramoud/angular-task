import {Constants} from './constants';
import {Page} from "../pagination/page";

export class PaginationCreator {

  constructor() {

  }

  public generatePagination(): Page[] {
    const pages = this.createPageNumbersList();
    const currentPage: string = localStorage.getItem('currentPageNumber') || "1";
    const indexOfActivePage = pages.indexOf(currentPage);
    const pagination: Page[] = pages.map(pageNumber => new Page(pageNumber, ""));
    pagination[indexOfActivePage].setClassList("active");
    return pagination;
  }

  public createPageNumbersList(): string[] {
    const totalPages: number = Number(localStorage.getItem('totalPages')) || 1;
    const currentPage: number = Number(localStorage.getItem('currentPageNumber')) || 1;
    let pages: string[] = [];
    if (totalPages < Constants.NUMBER_BUTTONS_FOR_FULL_SIZE_PAGINATION) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(String(i));
      }
    }
    if (totalPages >= Constants.NUMBER_BUTTONS_FOR_FULL_SIZE_PAGINATION) {
      const maxValueNextPage: number = totalPages - 1;
      const minValueNextPage: number = Constants.NUMBER_BUTTONS_FOR_FULL_SIZE_PAGINATION - 1;
      let nextPage: number = Math.max(currentPage + 1, minValueNextPage);
      nextPage = Math.min(nextPage, maxValueNextPage);
      const middlePage: number = nextPage - 1;
      const prevPage: number = Math.max(middlePage - 1, Constants.MIN_VALUE_PREV_PAGE);
      pages = [
        "1", "...", String(prevPage), String(middlePage), String(nextPage), "...", String(totalPages)
      ];
    }
    return pages;
  }
}

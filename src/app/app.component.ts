import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: any[] = [];

  addProduct(product: any) {
    this.products.push(product);
  }
}

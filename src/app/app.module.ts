import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HeaderComponent } from './header/header.component';
import { BurgerMenuComponent } from './header/burger-menu/burger-menu.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchFormComponent } from './header/search-form/search-form.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CardComponent } from './card/card.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PriceFormatPipe } from './price-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    HeaderComponent,
    BurgerMenuComponent,
    LogoComponent,
    SearchFormComponent,
    NavbarComponent,
    CategoryCardComponent,
    CardComponent,
    RegistrationPageComponent,
    MainPageComponent,
    PaginationComponent,
    PriceFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

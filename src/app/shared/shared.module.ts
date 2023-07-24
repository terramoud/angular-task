import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Form Controls
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

// Navigation
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

// Layout
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';

// Buttons & Indicators
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

// Popups & Modals
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';

// Data Table
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

// Components
import {HeaderComponent} from "../header/header.component";
import {BurgerMenuComponent} from "../header/burger-menu/burger-menu.component";
import {LogoComponent} from "../header/logo/logo.component";
import {SearchFormComponent} from "../header/search-form/search-form.component";
import {NavbarComponent} from "../header/navbar/navbar.component";
import {CategoryCardComponent} from "../category-card/category-card.component";
import {CardComponent} from "../card/card.component";
import {MainPageComponent} from "../main-page/main-page.component";
import {PaginationComponent} from "../pagination/pagination.component";
import {PriceFormatPipe} from "../price-format.pipe";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    BurgerMenuComponent,
    LogoComponent,
    SearchFormComponent,
    NavbarComponent,
    CategoryCardComponent,
    CardComponent,
    MainPageComponent,
    PaginationComponent,
    PriceFormatPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // Form Controls
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,

    // Navigation
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,

    // Layout
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,

    // Buttons & Indicators
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,

    // Popups & Modals
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,

    // Data Table
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [
    HeaderComponent,
    BurgerMenuComponent,
    LogoComponent,
    SearchFormComponent,
    NavbarComponent,
    CategoryCardComponent,
    CardComponent,
    MainPageComponent,
    PaginationComponent,
    PriceFormatPipe,

    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // Form Controls
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,

    // Navigation
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,

    // Layout
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,

    // Buttons & Indicators
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,

    // Popups & Modals
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,

    // Data Table
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ]
})
export class SharedModule {
}

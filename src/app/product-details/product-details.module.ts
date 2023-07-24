import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ItemDetailsComponent} from "../item-details/item-details.component";
import {SharedModule} from "../shared/shared.module";
import {SidebarCardComponent} from "../sidebar-card/sidebar-card.component";

const routes: Routes = [
  {
    path: '', component: ItemDetailsComponent
  },
];

@NgModule({
  declarations: [
    ItemDetailsComponent,
    SidebarCardComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductDetailsModule {
}

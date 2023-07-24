import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {RegistrationFormComponent} from "../registration-form/registration-form.component";
import {RegistrationPageComponent} from "../registration-page/registration-page.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '', component: RegistrationPageComponent
  },
];

@NgModule({
  declarations: [
    RegistrationFormComponent,
    RegistrationPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistrationModule {
}

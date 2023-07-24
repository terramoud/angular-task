import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {StarterDataGenerator} from "../main-page/starter-data-generator";
import {FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  public registrationStatus$: Observable<boolean>;

  constructor(private titleService: Title,
              private authService: AuthService) {
    this.registrationStatus$ = new Observable<boolean>();
  }

  ngOnInit() {
    const starterDataGenerator: StarterDataGenerator = new StarterDataGenerator();
    starterDataGenerator.clearAndFillLocalStorage();
    this.titleService.setTitle('Registration page');
  }

  handleRegisterFormSubmit(registrationForm: FormGroup) {
    this.registrationStatus$ = this.authService.registerUser(registrationForm.valid);
    setTimeout(() => {
      registrationForm.reset();
      this.registrationStatus$ = of(false);
    }, 2500);
  }
}

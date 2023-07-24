import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Observable} from "rxjs";

const passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.get('password')?.value;
  const repeatPassword = control.get('repeatPassword')?.value;
  return password === repeatPassword ? null : {passwordMismatch: true};
};

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;
  @Output() registrationFormSubmitted = new EventEmitter<FormGroup>();
  @Input() registrationStatus$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder) {
    this.registrationStatus$ = new Observable<boolean>();
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      loginName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      address: ['', Validators.required]
    }, {validator: passwordMatchValidator});
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registrationFormSubmitted.emit(this.registrationForm);
    }
  }
}

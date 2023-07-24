import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  registerUser(registerData: boolean): Observable<boolean> {
    if (registerData) {
      // Simulate a delay of 2 seconds
      return of(true).pipe(delay(1000));
    } else {
      return of(false).pipe(delay(1000));
    }
  }
}

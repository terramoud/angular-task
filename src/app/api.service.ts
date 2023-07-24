import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {
  }

  getData(): Promise<any> {
    return this.http.get<any>(`${this.apiUrl}/data`).toPromise();
  }
}


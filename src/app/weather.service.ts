import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'b8839a846c954fd981920942c617d156'; // کلید API خود را اینجا قرار دهید
  private apiUrl = 'https://api.weatherbit.io/v2.0/current';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?city=${city}&key=${this.apiKey}`);
  }
}

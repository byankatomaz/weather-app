import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../Environments/env';
import { WeatherData } from '../Interface/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get<WeatherData>(env().apiBaseUrl);
  }
}

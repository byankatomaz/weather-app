import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../../Interface/weather';
import { env } from '../../Environments/env';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    const config = env(city);
    return this.http.get<WeatherData>(config.apiBaseUrl);
  }
}

import { Component } from '@angular/core';
import { WeatherData } from '../../Interface/weather';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../Service/Weather/weather.service';
import { CityService } from '../../Service/City/city.service';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css'], // Adicione "style**s**"
})
export class WeatherPageComponent {
  city: string = ''; // Variável para o nome da cidade

  singleWeather: WeatherData = {
    coord: { lon: 0, lat: 0 },
    weather: [
      { id: 0, main: "Clear", description: "clear sky", icon: "01d" },
    ],
    base: "stations",
    main: {
      temp: 0,
      pressure: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0,
    },
    visibility: 10000,
    wind: { speed: 0, deg: 0 },
    clouds: { all: 0 },
    dt: Date.now(),
    sys: {
      type: 1,
      id: 0,
      message: 0,
      country: "XX",
      sunrise: 0,
      sunset: 0,
    },
    id: 0,
    name: "Unknown",
    cod: 200,
  };

  constructor(
    private weatherService: WeatherService,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    const city = this.cityService.getCity();
    console.log("Initial city:", city);

    this.weatherService.getWeather(city).subscribe((weather) => {
      this.singleWeather = weather;
    });
  }

  setCity(newCity: string): void {
    this.cityService.setCity(newCity);

    this.weatherService.getWeather(newCity).subscribe((weather) => {
      this.singleWeather = weather;
    });
  }
}

import { env } from './../../Environments/env';
import { Component } from '@angular/core';
import { WeatherService } from '../../Service/weather.service';
import { WeatherData } from '../../Interface/weather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css'
})
export class WeatherPageComponent {

  city: string = ""

  // Inicializando um único objeto do tipo WeatherData
  singleWeather: WeatherData = {
    coord: { lon: 0, lat: 0 }, // valores padrão
    weather: [
      {
        id: 0,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
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


  constructor(private service: WeatherService) {
    // Declaração da variável dentro do construtor
    const config = env(this.city); // Obter a configuração a partir de city
    console.log(config.apiBaseUrl); // Exemplo de uso do objeto config
  }
  ngOnInit(): void {

    this.service.getWeather().subscribe((weather) => {
      this.singleWeather = weather
    })

  }

}

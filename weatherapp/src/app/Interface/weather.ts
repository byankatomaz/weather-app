// Interface para a coordenada
interface Coord {
  lon: number;
  lat: number;
}

// Interface para a previsão do tempo
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// Interface para a seção "main"
interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

// Interface para o vento
interface Wind {
  speed: number;
  deg: number;
}

// Interface para nuvens
interface Clouds {
  all: number;
}

// Interface para o sistema
interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

// Interface principal para os dados do tempo
export interface WeatherData {
  coord: Coord; // Coordenadas
  weather: Weather[]; // Lista de condições climáticas
  base: string; // Base de medição
  main: Main; // Dados principais do clima
  visibility: number; // Visibilidade
  wind: Wind; // Dados do vento
  clouds: Clouds; // Dados das nuvens
  dt: number; // Data e hora do relatório
  sys: Sys; // Informações do sistema
  id: number; // ID da cidade
  name: string; // Nome da cidade
  cod: number; // Código do status
}

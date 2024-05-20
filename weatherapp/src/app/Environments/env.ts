export const env = (city?: string) => ({
  defaultCity: city,
  apiKey: '46f04ba37d2b2065f5e7c529fc4b972b',
  get apiBaseUrl() { 
    return `https://api.openweathermap.org/data/2.5/weather?q=${this.defaultCity}&appid=${this.apiKey}`;
  },
});

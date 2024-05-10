export const env = (city?: string) => ({
  defaultCity: city || 'Campinas', // Use um valor padrão se city for vazio
  apiKey: '46f04ba37d2b2065f5e7c529fc4b972b', // Chave da API
  get apiBaseUrl() { // Usando getter para compor a URL com as variáveis
    return `https://api.openweathermap.org/data/2.5/weather?q=${this.defaultCity}&appid=${this.apiKey}`;
  },
});

class Weather {
  constructor(city) {
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${this.city}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "059e2102b8mshdb657081bb5353ep161249jsn55128607e7e1",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
      }
    })
    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(citye) {
    this.city = city;
  }
}
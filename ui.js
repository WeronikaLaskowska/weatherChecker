class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.country = document.getElementById('w-country');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure= document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.location.name;
    this.country.textContent = weather.location.country;
    this.desc.textContent = weather.current.condition.text;
    this.string.innerHTML = `${weather.current.temp_c} &#8451;`;
    this.icon.setAttribute('src', weather.current.condition.icon);
    this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_c}`;
    this.pressure.textContent = `Pressure: ${weather.current.pressure_mb}`;
    this.wind.textContent = `Wind: ${weather.current.wind_kph}`;
  }
}
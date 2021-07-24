// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  // Change location
  weather.changeLocation(city);

  // Set location in LS
  storage.setLocationData(city);
  // Get and display weather
  getWeather();
    // Close modal
  $('#locModal').modal('hide');

  city.value='';
  window.location.reload(true);

});



function showAlert(msg){
  //Create div
const div = document.createElement('div');
div.className=`alert error`;
div.appendChild(document.createTextNode(msg));
console.log(div);
const space = document.querySelector('.err');
space.appendChild(div);

//Timeout 
setTimeout(function () {
  document.querySelector('.alert').remove();
}, 4000);
}

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => {
      showAlert('Wrong city name, no data to show')
      console.log(err);
      });
}
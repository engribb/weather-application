// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI
const ui = new UI();

// Get Weather on DOMload
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
 const city = document.getElementById('city').value;
 const state = document.getElementById('state').value;

 weather.changeLocation(city, state);

// set location in Localstorage
 storage.setLocationData(city, state);

//  get and Display weather
 getWeather();

//  Close modal
 $('#locmodal').modal('hide');
});

function getWeather(){
  weather.getWeather()
  .then(results => {
    UI.paint(results);
  })
  .catch(err => console.log(err));
}

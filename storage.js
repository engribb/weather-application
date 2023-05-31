class Storage {
 constructor() {
  this.city;
  this.state;
  this.defaultCity = 'miami';
  this.defaultState = 'FL';
 }

 getLocationData() {
  if(localStorage.getItem('city') === null){
  this.city = this.defaultCity;
 } else {
  this.city = localstorage.getItem('city');
  }
 

 if(localStorage.getItem('state') === null){
  this.state = this.defaultstate;
 } else {
  this.state = localstorage.getItem('state');
  }

  return {
    city: this.city,
    state: this.state
  }
 }


 setLocationData(city, state){
  localStorage.setItem('city', city);
  localStorage.setItem('state', state);
 }
}
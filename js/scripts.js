mapboxgl.accessToken =
"pk.eyJ1IjoiZ2ltbmEiLCJhIjoiY2tramUxdHF3MHBicTJvdGQxbW1sZTN5ZSJ9.bUCXqewoP9uZvXhPOoSnIA";

//get the location allow or block
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true
})

//if allow then get the location
function successLocation(position){
    // console.log(position)
    setupMap([position.coords.longitude,position.coords.latitude])
}

//if blocked get the default location
function errorLocation(){
    setupMap([79.8612,6.9271])
}

//set the location of the user on the map
function setupMap(center){
const map = new mapboxgl.Map({
container: "map",
style: "mapbox://styles/mapbox/streets-v11",
center:center,
zoom:13
});


//navigation manual button
const nav = new mapboxgl.NavigationControl();
map.addControl(nav)


// direction search button
var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
  
  map.addControl(directions, 'top-left');
}
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getWeather);
    }else{
        alert("Geolocation not supported by this browser");
    }
}

//Recieves geographical coordinates
function getWeather(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let API_KEY = "7d5d5c3302cbd6658127082512aa39db";
    let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;

    $.get(baseURL,function(res){
    let data = res.current;
    let temp = Math.floor(((data.temp - 273) * 9/5)+32);
    let condition = data.weather[0].description;

    // Display data on the web page
    $('#temp-main').html(`${temp}°`);
    $('#condition').html(condition);
})
}

getLocation();
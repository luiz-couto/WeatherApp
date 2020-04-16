const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=0a8bf0e59c293b5ff2364743ca0521ad&query=37.8267,-122.4233&units=m'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service.');
        return;
    }
    if (response.body.error) {
        console.log('Unable to find location');
        return;
    }
    
    const temperature = response.body.current.temperature;
    const feelsLike = response.body.current.feelslike;
    const weatherDes = response.body.current.weather_descriptions[0] || 'Não definido';
    console.log(weatherDes + '. It is currently ' + temperature + ' degress out. It feels like ' + feelsLike + ' degress out.');
});

const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Nova%20Lima.json?access_token=pk.eyJ1IjoibHVpei1mZWxpcGUiLCJhIjoiY2s5MnZkdjk4MDc1ODNnbHFhNmV1amFycCJ9.XoS8_3EVN73nI-4GiF0X1w&limit=1";

request({ url: url2, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service.');
        return;
    }
    if (!response.body.features || response.body.features.length == 0) {
        console.log('Unable to find location, try again with different search.');
        return;
    }
    const place_name = response.body.features[0].place_name;
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    console.log(place_name + ':');
    console.log(longitude + ', ' + latitude);
})
const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=0a8bf0e59c293b5ff2364743ca0521ad&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    const temperature = response.body.current.temperature;
    const feelsLike = response.body.current.feelslike;
    const weatherDes = response.body.current.weather_descriptions[0];
    console.log(weatherDes + '. It is currently ' + temperature + ' degress out. It feels like ' + feelsLike + ' degress out.');
});
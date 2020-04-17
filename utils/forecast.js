const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0a8bf0e59c293b5ff2364743ca0521ad&query=${latitude},${longitude}&units=m`

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                feelsLike: response.body.current.feelslike,
                weatherDes: response.body.current.weather_descriptions[0] || 'Não definido'
            })
        }

    })
    
}

module.exports = forecast;
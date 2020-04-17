const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


if (process.argv[2] && process.argv[2].length > 0) {

geocode(process.argv[2], (error, data) => {
    if (error) {
        console.log(error);
        return;
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {

        if (error) {
            console.log(error);
            return;
        }

        console.log(data.location);
        console.log(forecastData);

    })
})

} else {
    console.log('Please provide a location!');
}
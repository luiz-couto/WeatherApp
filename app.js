const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


if (process.argv[2] && process.argv[2].length > 0) {

geocode(process.argv[2], (error, { location, latitude, longitude }) => {
    if (error) {
        console.log(error);
        return;
    }

    forecast(latitude, longitude, (error, forecastData) => {

        if (error) {
            console.log(error);
            return;
        }

        console.log(location);
        console.log(forecastData);

    })
})

} else {
    console.log('Please provide a location!');
}
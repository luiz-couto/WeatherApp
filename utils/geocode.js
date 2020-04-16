const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibHVpei1mZWxpcGUiLCJhIjoiY2s5MnZkdjk4MDc1ODNnbHFhNmV1amFycCJ9.XoS8_3EVN73nI-4GiF0X1w&limit=1`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location service.', undefined);
            return;
        }
        if (!response.body.features || response.body.features.length == 0) {
            callback('Unable to find location, try again with different search.', undefined);
            return;
        }

        callback(undefined, {
            location: response.body.features[0].place_name,
            longitude: response.body.features[0].center[0],
            latitude: response.body.features[0].center[1]
        });
    })
}

module.exports = geocode;
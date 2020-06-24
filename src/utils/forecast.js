const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=30a01a36248313337b7d2c593465e0aa&query=' + lat + ',' + lon + '&units=f'

    //request({ url: url, json: true }, (error, response) => {
    request({ url, json: true }, (error, { body } ) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        //} else if (response.body.error){
        } else if (body.error){

            callback('Unable to find location.', undefined)
        } else {
            //callback(undefined, `${response.body.current.weather_descriptions[0]}. Currently it is ${response.body.current.temperature} F and it feels like ${response.body.current.feelslike} F.`)
            callback(undefined, `${body.current.weather_descriptions[0]}. Currently it is ${body.current.temperature}F and it feels like ${body.current.feelslike}F. The humidity is ${body.current.humidity}. Wind is from the ${body.current.wind_dir} at ${body.current.wind_speed} mph.`)
            //console.log(body)
        }
    })
}



module.exports = forecast
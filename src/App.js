import React from 'react';
import $ from 'jquery';
import './App.css';

const weatherAPIKey = "6699a3d1a9a5f8d5601c709abecd832f";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "-- : --",
            data: { "coord": { "lon": 90.41, "lat": 23.71 }, "weather": [{ "id": 721, "main": "Haze", "description": "haze", "icon": "50n" }], "base": "stations", "main": { "temp": 301.15, "pressure": 1013, "humidity": 83, "temp_min": 301.15, "temp_max": 301.15 }, "visibility": 4000, "wind": { "speed": 2.6, "deg": 120 }, "clouds": { "all": 75 }, "dt": 1570553380, "sys": { "type": 1, "id": 9145, "message": 0.006, "country": "BD", "sunrise": 1570492338, "sunset": 1570534775 }, "timezone": 21600, "id": 1185241, "name": "Dhaka", "cod": 200 },
            forecast: { "cod": "200", "message": 0.0074, "cnt": 40, "list": [{ "dt": 1570590000, "main": { "temp": 32.08, "temp_min": 28.43, "temp_max": 32.08, "pressure": 1011.79, "sea_level": 1011.79, "grnd_level": 1011.42, "humidity": 72, "temp_kf": 3.65 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "clouds": { "all": 95 }, "wind": { "speed": 2.13, "deg": 118.392 }, "sys": { "pod": "d" }, "dt_txt": "2019-10-09 03:00:00" }, { "dt": 1570600800, "main": { "temp": 34.37, "temp_min": 31.63, "temp_max": 34.37, "pressure": 1009.98, "sea_level": 1009.98, "grnd_level": 1009.47, "humidity": 53, "temp_kf": 2.74 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": { "all": 87 }, "wind": { "speed": 2.24, "deg": 191.872 }, "rain": { "3h": 1.625 }, "sys": { "pod": "d" }, "dt_txt": "2019-10-09 06:00:00" }, { "dt": 1570611600, "main": { "temp": 31.69, "temp_min": 29.87, "temp_max": 31.69, "pressure": 1006.77, "sea_level": 1006.77, "grnd_level": 1006.79, "humidity": 64, "temp_kf": 1.82 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": { "all": 76 }, "wind": { "speed": 4.08, "deg": 330.717 }, "rain": { "3h": 2.562 }, "sys": { "pod": "d" }, "dt_txt": "2019-10-09 09:00:00" }, { "dt": 1570622400, "main": { "temp": 26.59, "temp_min": 25.68, "temp_max": 26.59, "pressure": 1006.52, "sea_level": 1006.52, "grnd_level": 1007.01, "humidity": 84, "temp_kf": 0.91 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "clouds": { "all": 79 }, "wind": { "speed": 2.55, "deg": 22.365 }, "rain": { "3h": 1.188 }, "sys": { "pod": "n" }, "dt_txt": "2019-10-09 12:00:00" }, { "dt": 1570633200, "main": { "temp": 25.72, "temp_min": 25.72, "temp_max": 25.72, "pressure": 1008.81, "sea_level": 1008.81, "grnd_level": 1009.02, "humidity": 78, "temp_kf": 0 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "clouds": { "all": 58 }, "wind": { "speed": 1.81, "deg": 75.856 }, "rain": { "3h": 0.562 }, "sys": { "pod": "n" }, "dt_txt": "2019-10-09 15:00:00" }, { "dt": 1570644000, "main": { "temp": 24.75, "temp_min": 24.75, "temp_max": 24.75, "pressure": 1008.19, "sea_level": 1008.19, "grnd_level": 1008.44, "humidity": 85, "temp_kf": 0 }, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "clouds": { "all": 79 }, "wind": { "speed": 2.05, "deg": 45.554 }, "rain": { "3h": 5.688 }, "sys": { "pod": "n" }, "dt_txt": "2019-10-09 18:00:00" }, { "dt": 1570654800, "main": { "temp": 23.65, "temp_min": 23.65, "temp_max": 23.65, "pressure": 1007.67, "sea_level": 1007.67, "grnd_level": 1007.96, "humidity": 90, "temp_kf": 0 }, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10n" }], "clouds": { "all": 98 }, "wind": { "speed": 2.28, "deg": 64.267 }, "rain": { "3h": 5.562 }, "sys": { "pod": "n" }, "dt_txt": "2019-10-09 21:00:00" }, { "dt": 1570665600, "main": { "temp": 23.28, "temp_min": 23.28, "temp_max": 23.28, "pressure": 1008.98, "sea_level": 1008.98, "grnd_level": 1009.11, "humidity": 91, "temp_kf": 0 }, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "clouds": { "all": 67 }, "wind": { "speed": 1.87, "deg": 74.707 }, "rain": { "3h": 3.813 }, "sys": { "pod": "d" }, "dt_txt": "2019-10-10 00:00:00" }, { "dt": 1570676400, "main": { "temp": 27.34, "temp_min": 27.34, "temp_max": 27.34, "pressure": 1011.31, "sea_level": 1011.31, "grnd_level": 1010.92, "humidity": 78, "temp_kf": 0 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": { "all": 13 }, "wind": { "speed": 3.1, "deg": 70.594 }, "rain": { "3h": 2.125 }, "sys": { "pod": "d" }, "dt_txt": "2019-10-10 03:00:00" }, { "dt": 1570687200, "main": { "temp": 28.51, "temp_min": 28.51, "temp_max": 28.51, "pressure": 1009.41, "sea_level": 1009.41, "grnd_level": 1008.98, "humidity": 75, "temp_kf": 0 }, "weather": [{ "id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d" }], "clouds": { "all": 24 }, "wind": { "speed": 3.79, "deg": 58.79 }, "rain": { "3h": 8.687 }, "sys": { "pod": "d" }, "dt_txt": "2019-10-10 06:00:00" }, { "dt": 1570698000, "main": { "temp": 26.76, "temp_min": 26.76, "temp_max": 26.76, "pressure": 1006.7, "sea_level": 1006.7, "grnd_level": 1006.88, "humidity": 84, "temp_kf": 0 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": { "all": 95 }, "wind": { "speed": 4.65, "deg": 66.884 }, "rain": { "3h": 2.438 }, "sys": { "pod": "d" }, "dt_txt": "2019-10-10 09:00:00" }, { "dt": 1570708800, "main": { "temp": 25.16, "temp_min": 25.16, "temp_max": 25.16, "pressure": 1006.81, "sea_level": 1006.81, "grnd_level": 1007.2, "humidity": 89, "temp_kf": 0 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "clouds": { "all": 67 }, "wind": { "speed": 3.34, "deg": 91.856 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2019-10-10 12:00:00" }, { "dt": 1570719600, "main": { "temp": 24.35, "temp_min": 24.35, "temp_max": 24.35, "pressure": 1008.35, "sea_level": 1008.35, "grnd_level": 1008.61, "humidity": 89, "temp_kf": 0 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03n" }], "clouds": { "all": 49 }, "wind": { "speed": 2.77, "deg": 94.184 }, "sys": { "pod": "n" }, "dt_txt": "2019-10-10 15:00:00" }, { "dt": 1570730400, "main": { "temp": 23.95, "temp_min": 23.95, "temp_max": 23.95, "pressure": 1008.49, "sea_level": 1008.49, "grnd_level": 1008.58, "humidity": 89, "temp_kf": 0 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "clouds": { "all": 73 }, "wind": { "speed": 2.34, "deg": 66.316 }, "sys": { "pod": "n" }, "dt_txt": "2019-10-10 18:00:00" }, { "dt": 1570741200, "main": { "temp": 23.47, "temp_min": 23.47, "temp_max": 23.47, "pressure": 1007.87, "sea_level": 1007.87, "grnd_level": 1007.95, "humidity": 90, "temp_kf": 0 }, "weather": [{ "id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04n" }], "clouds": { "all": 76 }, "wind": { "speed": 2.81, "deg": 50.798 }, "sys": { "pod": "n" }, "dt_txt": "2019-10-10 21:00:00" }], "city": { "id": 1185241, "name": "Dhaka", "coord": { "lat": 23.7104, "lon": 90.4074 }, "country": "BD", "population": 10356500, "timezone": 21600, "sunrise": 1570578762, "sunset": 1570621118 } },
            currentTemp: "32",
            currentWeather: "sunny",
            currentHumidity: "60%",
            currentIcon: "50d",
            metric: true,
            country: "BD",
            city: "Dhaka",
            sunrise: "05:00:00",
            sunset: "17:00:00",
        };
        this.handleUnitsChange = this.handleUnitsChange.bind(this);
        this.getCurrentData = this.getCurrentData.bind(this);
    };

    UTX(dt) {
        return (new Date(dt * 1000))
    };

    timefy(time) {
        return (time < 10 ? "0" + time : time)
    };


    getCurrentData(URL) {

        $.ajax({
            url: URL,
            dataType: 'json',
            success: (data) => {
                this.setState(state => {
                    return {
                        currentTemp: data.main.temp,
                        currentWeather: data.weather[0].main,
                        currentHumidity: data.main.humidity,
                        currentIcon: data.weather[0].icon,
                        country: data.sys.country,
                        city: data.name,
                        dt: data.dt,
                        sunrise: this.timefy(this.UTX(data.sys.sunrise).getHours()) + ":" + this.timefy(this.UTX(data.sys.sunrise).getMinutes()),
                        sunset: this.timefy(this.UTX(data.sys.sunset).getHours()) + ":" + this.timefy(this.UTX(data.sys.sunset).getMinutes())
                    }
                })
            },
            error: function(data) {
                alert("failed to get data");
            }
        });

    };

    getForecastData(URL) {
        $.getJSON(URL, response => {
            this.setState(state => {
                return {
                    forecast: response
                }
            })
        });
    };

    handleUnitsChange() {
        this.setState(state => {
            return {
                metric: !this.state.metric
            }
        })
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            let today = new Date();
            let currentTime = this.timefy(today.getHours()) + ":" + this.timefy(today.getMinutes()) + ":" + this.timefy(today.getSeconds());
            this.setState(state => {
                return {
                    time: currentTime
                }
            })
        }, 1000);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                pos => {
                    let longitude = pos.coords.longitude;
                    let latitude = pos.coords.latitude;
                    let currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherAPIKey}`;
                    let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherAPIKey}`;
                    this.getCurrentData(currentURL);
                    this.getForecastData(forecastURL);
                },
                err => {
                    console.warn(`ERROR ${err.code}: ${err.message}`);
                    let location = prompt("Please provide the name of your city followed by your country code, separated by a , (example: London,UK)");
                    let currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${weatherAPIKey}`;
                    let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${weatherAPIKey}`;
                    this.getCurrentData(currentURL);
                    this.getForecastData(forecastURL);
                }, {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            );
        } else {
            let location = prompt("Please provide the name of your city followed by your country code, separated by a , (example: London,UK)");
            let currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${weatherAPIKey}`;
            let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${weatherAPIKey}`;
            this.getCurrentData(currentURL);
            this.getForecastData(forecastURL);

        };
        document.querySelector(".forecastHours").style.border = "0px";
    };


    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        const rain = "https://images.pexels.com/photos/262212/pexels-photo-262212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        const fewClouds = "https://images.pexels.com/photos/479333/pexels-photo-479333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        const overcast = "https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        const clear = "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
        const rainNight = "https://images.pexels.com/photos/2797487/pexels-photo-2797487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        const clearNight = "https://images.pexels.com/photos/1564334/nature-sky-milky-way-galaxy-1564334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        const cloudsNight = "https://images.pexels.com/photos/790181/pexels-photo-790181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        const thunderstorm = "https://images.pexels.com/photos/904398/pexels-photo-904398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        const snow = "https://images.pexels.com/photos/954710/pexels-photo-954710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        const snowNight = "https://images.pexels.com/photos/280204/pexels-photo-280204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        const mist = "https://images.pexels.com/photos/69825/sunbeam-fog-autumn-nature-69825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        const mistNight = "https://images.pexels.com/photos/327308/pexels-photo-327308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        let backgroundImage;
        switch (this.state.currentIcon) {
            case "01d":
                backgroundImage = clear;
                break;
            case "01n":
                backgroundImage = clearNight;
                break;
            case "02d":
            case "03d":
                backgroundImage = fewClouds;
                break;
            case "03n":
            case "02n":
                backgroundImage = cloudsNight;
                break;
            case "04d":
            case "04n":
                backgroundImage = overcast;
                break;
            case "09d":
            case "10d":
                backgroundImage = rain;
                break;
            case "09n":
            case "10n":
                backgroundImage = rainNight;
                break;
            case "11d":
            case "11n":
                backgroundImage = thunderstorm;
                break;
            case "13d":
                backgroundImage = snow;
                break;
            case "13n":
                backgroundImage = snowNight;
                break;
            case "50d":
                backgroundImage = mist;
                break;
            case "50n":
                backgroundImage = mistNight;
                break;
            default:
                backgroundImage = clear;
                break;
        };

        let style = { "backgroundImage": "url('" + backgroundImage + "')" };
        return ( <
            div > <
            div id = "page_wrapper"
            style = { style } >
            <
            div className = "top_row" >
            <
            div className = "location_date" >
            <
            City city = { this.state.country + ", " + this.state.city }
            /> <
            DateTime dt = { this.state.dt }
            UTX = { this.UTX }
            timefy = { this.timefy }
            />

            <
            /div>

            <
            /div>


            <
            Units handleUnitsChange = { this.handleUnitsChange }
            /> <
            CurrentWeather currentWeather = { this.state.currentWeather }
            temp = { this.state.currentTemp }
            metric = { this.state.metric }
            humidity = { "Humidity : " + this.state.currentHumidity + "%" }
            icon = {
                "https://openweathermap.org/img/wn/" +
                this.state.currentIcon +
                "@2x.png"
            }
            clock = { this.state.time }
            sunrise = { this.state.sunrise }
            sunset = { this.state.sunset }
            /> <
            Forecast forecast = { this.state.forecast.list.slice(0, 8) }
            metric = { this.state.metric }
            UTX = { this.UTX }
            timefy = { this.timefy }
            /> < /
            div > <
            Footer /
            >

            <
            /div>
        );
    }
};

class CurrentWeather extends React.Component {
    render() {
        return ( <
            div id = "currentData" >
            <
            div className = "currentWeatherInfo" >
            <
            div id = "temp_now" > { this.props.metric ? parseInt(this.props.temp) + " \xB0C" : parseInt((this.props.temp * 9 / 5) + 32) + " \xB0F" } < /div> <
            div id = "humidity_now" > { this.props.humidity } < /div> < /
            div > <
            div id = "clock_icon_wrapper" >
            <
            div id = "icon_now" >
            <
            img id = "icon_main"
            src = { this.props.icon }
            alt = "weather-icon" / >
            <
            div id = "condition_now" > { this.props.currentWeather } < /div> < /
            div > <
            div id = "clock" >
            <
            div > { this.props.clock } < /div> <
            div className = "sunpos" >
            <
            div className = "sun-rise-set"
            id = "sunrise" > { this.props.sunrise } < /div> <
            div className = "sun-rise-set"
            id = "sunset" > { this.props.sunset } < /div> < /
            div > <
            /div>

            <
            /div> < /
            div >
        );
    };
};

const City = props => {
    return ( <
        div id = "cityName" >
        <
        h3 > { props.city } < /h3> < /
        div >
    );
};

const DateTime = props => {
    return ( <
        div >
        <
        h3 > {
            (props.UTX(props.dt)).toString().slice(0, 15)
        } < /h3> < /
        div >
    )
};



class Forecast extends React.Component {
    render() {
        return ( <
            div id = "forecastWrapper" > {
                this.props.forecast.map((item, index) =>
                    ( < div key = { index }
                        className = "forecastHours" > < div > { this.props.timefy(this.props.UTX(item.dt).getHours()) + ":" + this.props.timefy(this.props.UTX(item.dt).getMinutes()) } < /div> <
                        div className = "for_temp" > { this.props.metric ? parseInt(item.main.temp) + " \xB0C" : parseInt((item.main.temp * 9 / 5) + 32) + " \xB0F" } < /div>

                        <
                        div > < img src = { "https://openweathermap.org/img/wn/" + item.weather[0].icon + ".png" }
                        alt = "weather-icon" / > < /div> <
                        div > { item.weather[0].description } < /div> < /
                        div > ))
            } <
            /div>
        )
    };
};

const Units = (props) => {
    return ( <
        div className = "units" >
        <
        h4 > {
            '\u00b0'
        }
        C < /h4>

        <
        label className = "switch" >

        <
        input type = "checkbox"
        onClick = { props.handleUnitsChange }
        /> <
        span className = "slider round" > < /span>

        <
        /label> <
        h4 > {
            '\u00b0'
        }
        F < /h4> < /
        div >
    )
};

const Footer = () => {
    return ( <
        footer >
        <
        p > Weather data by < a href = "https://openweathermap.org" > Openweathermap < /a></p >
        <
        p > Sunrise and sunset icons made by < a href = "https://www.flaticon.com/authors/freepik" > Freepik < /a> from <a href="www.flaticon.com">Flaticon.com</a > < /p> <
        p > Background images under creative commons licence from < a href = "www.pexels.com" > Pexels.com < /a></p >
        <
        /footer>

    )
}

export default App;
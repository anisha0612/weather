import React from "react";
import axios from "axios";
import Header from "../components/Header/Header.jsx";
import CurrentCard from "../components/CurrentCard.jsx";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      long: "",
      city: "",
      country: "",
      current: {
        temp: "",
        minTemp: "",
        maxTemp: "",
        main: "",
        desc: "",
        feels_like: "",
        wind_speed: "",
        wind_deg: "",
      },
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
        )
        .then((response) => response.data)
        .then((data) =>
          this.setState({
            city: data.name,
            country: data.sys.country,
            current: {
              temp: data.main.temp,
              maxTemp: data.main.temp_max,
              minTemp: data.main.temp_min,
              feels_like: data.main.feels_like,
              wind_speed: data.wind.speed,
              wind_deg: data.wind.deg,
              main: data.weather[0].main,
              desc: data.weather[0].description,
            },
          })
        )
        .catch((err) => console.log(err));
    });
  }
  render() {
    return (
      <div className="HomePage">
        <Header />
        <h1>Weather Report</h1>
        <CurrentCard current={this.state.current} {...this.state} />
      </div>
    );
  }
}

export default Home;

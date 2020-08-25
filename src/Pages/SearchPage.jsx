import React from "react";
import axios from "axios";
import SearchBox from "../components/SearchBox.jsx";
import Header from "../components/Header/Header.jsx";
import CurrentCard from "../components/CurrentCard.jsx";

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      country: "",
      minTemp: "",
      maxTemp: "",
      current: {
        temp: "",
        weather: [],
        main: "",
        desc: "",
        feels_like: "",
        wind_speed: "",
        wind_deg: "",
      },
    };
  }

  searchInput = (e) => {
    this.setState({
      city: e.target.value,
    });
    if (e.keyCode === 13) {
      this.fetchWeather();
    }
  };

  getWeather = (data) => {
    this.setState({
      city: data.name,
      country: data.sys.country,
      current: {
        temp: data.main.temp,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        feels_like: data.main.feels_like,
        main: data.weather[0].main,
        desc: data.weather[0].description,
        wind_deg: data.wind.deg,
        wind_speed: data.wind.speed,
      },
    });
    console.log(this.state);
  };

  handleClick = () => {
    this.fetchWeather();
  };

  fetchWeather = () => {
    const city = this.state.city;
    const capitalize = city.charAt(0).toUpperCase() + city.slice(1);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capitalize}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      )
      .then((response) => response.data)
      .then((result) => this.getWeather(result))
      .catch((err) => {
        console.log(
          "For Cities in USA, the format is city,state,country. Check the format" +
            err
        );
      });
  };

  render() {
    return (
      <div>
        <Header />
        <h1>Weather Report</h1>
        <SearchBox
          handleChange={this.searchInput}
          handleClick={this.handleClick}
        />
        <CurrentCard
          current={this.state.current}
          city={this.state.city}
          country={this.state.country}
        />
      </div>
    );
  }
}

export default SearchPage;

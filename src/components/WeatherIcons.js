import cloudy from "../images/cloudy-day-1.svg";
import sunny from "../images/day.svg";
import rainy from "../images/rainy.svg";
import snowy from "../images/snowy.svg";
import thunder from "../images/thunder.svg";
import weather from "../images/weather.svg";
import haze from "../images/cloudy.svg";
export const iconDisplay = (status) => {
  switch (status) {
    case "Clouds":
      return cloudy;
    case "Clear":
      return sunny;
    case "Rain":
      return rainy;
    case "Thunderstorm":
      return thunder;
    case "Snow":
      return snowy;
    case "Haze":
    case "Smoke":
    case "Mist":
      return haze;

    default:
      return weather;
  }
};

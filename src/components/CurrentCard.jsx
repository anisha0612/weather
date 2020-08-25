import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import { iconDisplay } from "./WeatherIcons.js";
import loader from "../images/Ripple-1s-200px.svg";

const useStyles = makeStyles({
  card: {
    padding: "1rem",
    width: "50%",
    height: "auto",
    margin: "0 auto",
    boxShadow: "10px 10px 11px 1px rgba(194,190,194,0.9)",
  },
  center: {
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
  },
  padding: {
    padding: "1em 0",
  },
  desc: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  paddingRt: {
    paddingRight: "1em",
  },
});

const WeatherCard = (props) => {
  const classes = useStyles();

  if (props.current.temp) {
    return (
      <div className={classes.center}>
        <Card className={classes.card} variant="outlined">
          <CardHeader
            className={classes.title}
            title={props.city}
            subheader={props.country}
          />
          <CardContent>
            <Typography>Temp : {props.current.temp}&#8457;</Typography>
            <img src={iconDisplay(props.current.main)} alt="icon" />
            <Grid container>
              <Grid className={classes.padding} item xs={12}>
                Feels Like : {props.current.feels_like}&#8457;
              </Grid>

              <Grid className={classes.desc} item xs={12}>
                {props.current.desc}
              </Grid>
              <Grid className={classes.padding} item xs={12} sm={6}>
                <Icon className="fas fa-temperature-low" />{" "}
                {props.current.minTemp}
                &#8457;
              </Grid>
              <Grid className={classes.padding} item xs={12} sm={6}>
                <Icon className="fas fa-temperature-high" />{" "}
                {props.current.maxTemp}
                &#8457;
              </Grid>
              <Grid className={classes.padding} item xs={12} sm={6}>
                <Icon className="fas fa-wind" /> {props.current.wind_deg}
                &#176;
              </Grid>
              <Grid className={classes.padding} item xs={12} sm={6}>
                <Icon className="fas fa-wind" /> {props.current.wind_speed}
                m/s
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
      <div>
        <img src={loader} alt="Loading..." />
      </div>
    );
  }
};

export default WeatherCard;

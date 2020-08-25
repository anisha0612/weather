import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import SearchPage from "./Pages/SearchPage.jsx";
import NotFound from "./Pages/NotFound.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

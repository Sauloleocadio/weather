import React, { useCallback, useState, useEffect } from "react";

import api from "./services/api";
import { transformTextCapitalize } from "./utils/transformTextCapitalize";

import Header from "./components/Header";
import CardForecast from "./components/CardForecast";
import WeatherInfo from "./components/WeatherInfo";

import "./styles/global.module.css";
import styles from "./app.module.css";

function App() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    getWeather();
  }, []);

  function getWeather() {
    try {
      const response = api.get("/");
      console.log(response);
    } catch (error) {}
  }

  const handleChangeInput = useCallback((e) => {
    setSearch(transformTextCapitalize(e.target.value));
  }, []);

  // const handleChangeInput(e) {
  //   setSearch(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  // }

  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <Header
          currently="dia"
          search={search}
          handleChangeInput={handleChangeInput}
        />
        <WeatherInfo />
        <div className={styles.containerCardsForecast}>
          <CardForecast forecast={"teste"} />
          <CardForecast forecast={"teste"} />
          <CardForecast forecast={"teste"} />
          <CardForecast forecast={"teste"} />
          <CardForecast forecast={"teste"} />
          <CardForecast forecast={"teste"} />
          <CardForecast forecast={"teste"} />
        </div>
      </div>
    </div>
  );
}

export default App;

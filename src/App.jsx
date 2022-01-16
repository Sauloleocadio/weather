import React, { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";

import { defaultOptions } from "./utils/defaultOptionsLottie";
import api from "./services/api";

import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import CardForecast from "./components/CardForecast";
import WeatherInfo from "./components/WeatherInfo";

import "./styles/global.module.css";
import styles from "./app.module.css";

function App() {
  const search = useRef(null);
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather(searchCity) {
    setLoadingButton(true);

    const request = {
      params: {
        city_name: searchCity,
      },
    };

    try {
      const response = await api.get("/weather", request);
      if (response) {
        const { results } = response?.data;
        setWeather(results);
      }
    } finally {
      setLoading(false);
      setLoadingButton(false);
    }
  }

  return (
    <div className={styles.container}>
      <ErrorBoundary>
        {loading ? (
          <Lottie options={defaultOptions} height={400} width={400} />
        ) : (
          <div className={styles.containerContent}>
            <Header
              currently={weather?.currently}
              search={search}
              getWeather={getWeather}
              loadingButton={loadingButton}
            />
            <h1 className={styles.title}>Dados da pesquisa:</h1>
            <WeatherInfo weather={weather} />
            <h1 className={styles.title}>Próximos dias:</h1>
            <div className={styles.containerCardsForecast}>
              {weather?.forecast.map((forecast, index) => {
                return <CardForecast key={index} forecast={forecast} />;
              })}
            </div>
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;

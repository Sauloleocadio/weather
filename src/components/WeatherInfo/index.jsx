import React from "react";

import styles from "./styles.module.css";

function WeatherInfo({ weather }) {
  const {
    city_name,
    date,
    description,
    humidity,
    sunrise,
    sunset,
    temp,
    time,
    wind_speedy,
  } = weather;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1>Nome da cidade:</h1>
          <span>{city_name}</span>
        </div>
        <div className={styles.wrapper}>
          <h1>Tempo:</h1>
          <span>
            {temp}° {description}
          </span>
        </div>
        <div className={styles.wrapper}>
          <h1>Humidade:</h1>
          <span>{humidity}%</span>
        </div>
        <div className={styles.wrapper}>
          <h1>Nascer do sol:</h1>
          <span>{sunrise}</span>
        </div>
        <div className={styles.wrapper}>
          <h1>Pôr do sol:</h1>
          <span>{sunset}</span>
        </div>
        <div className={styles.wrapper}>
          <h1>Vento:</h1>
          <span>{wind_speedy}</span>
        </div>
        <div className={styles.wrapper}>
          <h1>Última pesquisa:</h1>
          <span>
            {date} às {time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;

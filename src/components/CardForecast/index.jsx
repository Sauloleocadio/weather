import React from "react";

import ImageForecast from "./UI/ImageForecast";

import styles from "./styles.module.css";

function CardForecast({ forecast }) {
  const { condition, weekday, date, description, max, min } = forecast;
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <ImageForecast typeForecast={condition} />
        <h3 className={styles.typeForecast}>{description}</h3>
        <span className={styles.titleDate}>
          {weekday}, {date}
        </span>

        <h4 className={styles.temperature}>
          Máx: <span>{max}°</span> Mín: <span>{min}°</span>
        </h4>
      </div>
    </div>
  );
}

export default CardForecast;

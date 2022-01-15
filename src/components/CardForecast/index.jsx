import React from "react";

import ImageForecast from "./UI/ImageForecast";

import styles from "./styles.module.css";

function CardForecast({ forecast }) {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <ImageForecast typeForecast="cloud" />
        <h3 className={styles.typeForecast}>Chuvas esparsas</h3>
        <span className={styles.titleDate}>Qui, 18 de novembro</span>

        <h4 className={styles.temperature}>
          Máx: <span>29°</span> Mín: <span> 17°</span>
        </h4>
      </div>
    </div>
  );
}

export default CardForecast;

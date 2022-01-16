import React from "react";

import Search from "../Search";

import { ReactComponent as WiDaySunny } from "../../assets/currently/day.svg";
import { ReactComponent as WiNightClear } from "../../assets/currently/night.svg";

import styles from "./styles.module.css";

function Header({ currently, search, loadingButton, getWeather }) {
  return (
    <div className={styles.container}>
      <div className={styles.contentTitle}>
        <h1
          className={currently === "dia" ? styles.titleDay : styles.titleNight}
        >
          Previsão do tempo
        </h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.containerCurrently}>
          {currently === "dia" ? (
            <WiDaySunny className={styles.image} />
          ) : (
            <WiNightClear className={styles.image} />
          )}
          <h1
            className={
              currently === "dia" ? styles.currentlyDay : styles.currentlyNight
            }
          >
            {currently === "dia" ? `Bom ${currently}!` : `Boa ${currently}!`}
          </h1>
        </div>
        <div className={styles.containerSearch}>
          <Search
            currently={currently}
            loadingButton={loadingButton}
            search={search}
            getWeather={getWeather}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

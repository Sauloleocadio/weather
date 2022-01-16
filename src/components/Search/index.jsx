import React from "react";
import { ReactComponent as DayImage } from "../../assets/currently/day.svg";
import { ReactComponent as NightImage } from "../../assets/currently/night.svg";
import { ReactComponent as SearchImage } from "../../assets/currently/search.svg";

import styles from "./styles.module.css";

function Search({ search, currently, loadingButton, getWeather }) {
  function getCurrently(currently) {
    switch (currently) {
      case "dia":
        return <DayImage className={styles.icon} />;
      case "noite":
        return <NightImage className={styles.icon} />;
      default:
        return <NightImage className={styles.icon} />;
    }
  }

  return (
    <div className={styles.container}>
      <input
        onKeyPress={(e) =>
          e.key === "Enter" &&
          search.current.value &&
          getWeather(search.current.value)
        }
        onBlur={() => search.current.value && getWeather(search.current.value)}
        ref={search}
        className={styles.input}
        type="text"
        placeholder="Insira aqui o nome da cidade"
        autoCapitalize="sentences"
      />

      {loadingButton ? (
        getCurrently(currently)
      ) : (
        <SearchImage
          className={styles.iconSearch}
          onClick={() =>
            search.current.value && getWeather(search.current.value)
          }
        />
      )}
    </div>
  );
}

export default Search;

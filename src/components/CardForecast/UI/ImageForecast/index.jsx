import React from "react";
import styles from "./styles.module.css";

import { ReactComponent as ClearDay } from "../../../../assets/forecast/clear_day.svg";
import { ReactComponent as ClearNight } from "../../../../assets/forecast/clear_night.svg";
import { ReactComponent as Cloud } from "../../../../assets/forecast/cloud.svg";
import { ReactComponent as CloudlyDay } from "../../../../assets/forecast/cloudly_day.svg";
import { ReactComponent as CloudlyNight } from "../../../../assets/forecast/cloudly_night.svg";
import { ReactComponent as Fog } from "../../../../assets/forecast/fog.svg";
import { ReactComponent as Hail } from "../../../../assets/forecast/hail.svg";
import { ReactComponent as NoneDay } from "../../../../assets/forecast/none_day.svg";
import { ReactComponent as NoneNight } from "../../../../assets/forecast/none_night.svg";
import { ReactComponent as Rain } from "../../../../assets/forecast/rain.svg";
import { ReactComponent as Snow } from "../../../../assets/forecast/snow.svg";
import { ReactComponent as Storm } from "../../../../assets/forecast/storm.svg";
import { ReactComponent as DefaultImage } from "../../../../assets/forecast/default.svg";

function ImageForecast({ typeForecast }) {
  switch (typeForecast) {
    case "clear_day":
      return <ClearDay className={styles.imageContent} />;
    case "clear_night":
      return <ClearNight className={styles.imageContent} />;
    case "cloud":
      return <Cloud className={styles.imageContent} />;
    case "cloudly_day":
      return <CloudlyDay className={styles.imageContent} />;
    case "cloudly_night":
      return <CloudlyNight className={styles.imageContent} />;
    case "fog":
      return <Fog className={styles.imageContent} />;
    case "hail":
      return <Hail className={styles.imageContent} />;
    case "none_day":
      return <NoneDay className={styles.imageContent} />;
    case "none_night":
      return <NoneNight className={styles.imageContent} />;
    case "rain":
      return <Rain className={styles.imageContent} />;
    case "snow":
      return <Snow className={styles.imageContent} />;
    case "storm":
      return <Storm className={styles.imageContent} />;

    default:
      return <DefaultImage className={styles.imageContent} />;
  }
}

export default ImageForecast;

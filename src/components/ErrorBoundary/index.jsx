import React, { Component } from "react";
import Lottie from "react-lottie";

import { defaultOptionsSad } from "../../utils/defaultOptionsLottie";

import styles from "./styles.module.css";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: "",
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.debug({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <h1 className={styles.title}>
            Este serviço está temporariamente indisponível.
            <br /> Tente novamente mais tarde.
          </h1>
          <br />
          <h1 className={styles.title}>
            Se o erro persistir entre no link provisório:
            <br />
            <a href="https://havanlabs-weathertwo.vercel.app" target="_blank" rel="noreferrer">
              https://havanlabs-weathertwo.vercel.app
            </a>
          </h1>
          <Lottie options={defaultOptionsSad} height={400} width={400} />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

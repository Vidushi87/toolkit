import React from "react";
import styles from "./CurrencyConverter.module.css";
import ConverterForm from "./converterForm";

const CurrencyConverter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.currencyConverter}>
        <center>
          <h1>Currency Converter</h1>
        </center>
        <ConverterForm />
      </div>
    </div>
  );
};

export default CurrencyConverter;

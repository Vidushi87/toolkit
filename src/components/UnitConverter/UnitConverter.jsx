import React, { useState } from "react";
import styles from "./UnitConverter.module.css";
import UnitConverterForm from "./UnitConverterForm";



const UnitConverter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.unitConverter}>
        <center>
          <h1>Unit Converter</h1>
        </center>
        <UnitConverterForm />
      </div>
    </div>
  );
};

export default UnitConverter;

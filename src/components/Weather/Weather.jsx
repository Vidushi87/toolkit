import React from 'react'
import styles from './Weather.module.css'

const Weather = () => {
  return (
    <div className={styles.container}>
      <div className={styles.weather}>
        <center>
          <h1>Weather</h1>
        </center>
      </div>
    </div>
  )
}

export default Weather
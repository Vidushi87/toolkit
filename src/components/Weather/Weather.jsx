import React from 'react'
import styles from './Weather.module.css'
import WeatherDashboard from './WeatherDashboard'

const apiKey = "3d98415b86c142c4b5a112410241112";

const Weather = () => {
  return (
    <div className={styles.container}>
      <div className={styles.weather}>
        <center>
          <h1>Weather Forecast</h1>
        </center>
        <WeatherDashboard apiKey={apiKey}/>
      </div>
    </div>
  )
}

export default Weather
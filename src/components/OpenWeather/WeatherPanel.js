import React, { Component } from 'react';
import { getOr } from "lodash/fp";
import cx from 'classnames';
import styles from './openWeather.scss';
import WeatherIcon from './WeatherIcon';
import SVGInline from "react-svg-inline"
import Precipitation from './media/precipitation.svg'
import Wind from './media/wind.svg'

class WeatherPanel extends Component {

  temperatureConversion = (tempInKelvins) => {
    return Math.round(tempInKelvins - 273.15);
  }

  rainFall = (data) => {
    return getOr('0','rain',data);
  }

  windDirection = (data) => {
    return data.wind.deg + 180;
  }

  render() {

    if (this.props.weatherData) {
      return (
        <div className={cx(styles.weatherPanel)}>
          <div className={cx(styles.inner)}>

            <div className={cx(styles.header)}>
              <div className={cx(styles.date)}>
                Today
              </div>
              <div className={cx(styles.location)}>
                {this.props.weatherData.name}
              </div>
            </div>
            <div className={cx(styles.summary)}>
              <div className={cx(styles.weatherIcon)}>
             {/*   {this.props.weatherData.weather[0].icon}*/}
                <WeatherIcon iconId={this.props.weatherData.weather[0].icon} iconStyle={'full'}/>
              </div>
              <div className={cx(styles.temperature)}>
                <div className={cx(styles.tempCell, styles.Max)}>
                  {this.temperatureConversion(this.props.weatherData.main.temp_max) + '°' }
                </div>
                <div className={cx(styles.tempCell, styles.Min)}>
                  {this.temperatureConversion(this.props.weatherData.main.temp_min) + '°' }
                </div>
              </div>
            </div>
            <div className={cx(styles.details)}>
              <div className={cx(styles.cell, styles.description)}>
                <div className={cx(styles.icon)}>

            {/*      {this.props.weatherData.weather[0].icon}*/}

                  <WeatherIcon iconId={this.props.weatherData.weather[0].icon} iconStyle={'simple'}/>
                </div>
                <div className={cx(styles.label)}>
                  {this.props.weatherData.weather[0].main}
                </div>
              </div>
              <div className={cx(styles.cell, styles.wind)}>
                <div className={cx(styles.icon)} style={{transform: `rotate(${this.windDirection(this.props.weatherData)}deg`}}>
                  <SVGInline svg={ Wind } className={cx(styles.wind )}  />
                </div>
                {this.props.weatherData.wind.speed + 'm/s'}
              </div>
              <div className={cx(styles.cell, styles.perp)}>
                <div className={cx(styles.icon)}>
                  <SVGInline svg={ Precipitation } className={cx(styles.icon, styles.precipitation )} />
                </div>
                <div className={cx(styles.label)}>
                  {this.rainFall(this.props.weatherData) + 'mm' }
                </div>
              </div>
            </div>
            <div className={cx(styles.extra)}>
              <div className={cx(styles.row)}>
                <div className={cx(styles.col, styles.label)}>
                  Humidity
                </div>
                <div className={cx(styles.col, styles.value)}>
                  {this.props.weatherData.main.humidity + '%' }
                </div>
              </div>
              <div className={cx(styles.row)}>
                <div className={cx(styles.col, styles.label)}>
                  Pressure
                </div>
                <div className={cx(styles.col, styles.value)}>
                  {this.props.weatherData.main.pressure + 'hPa' }
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return null;

  }
}

export default WeatherPanel;
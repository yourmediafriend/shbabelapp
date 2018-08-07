import React, { Component } from 'react';
import PageTitle from '../../PageTitle';
import WeatherApp from '../../OpenWeather';
import bannerImg from '../../../media/weatherPage/banner-clouds.jpg';

class Page extends Component {
  render() {
    return (
      <div>
        <PageTitle title={ 'Weather' } layout={'full'} backgroundColor={ '#282828' }  backgroundImg={ bannerImg } style={{}} />
        <WeatherApp />
      </div>
    )
  }
}

export default Page;

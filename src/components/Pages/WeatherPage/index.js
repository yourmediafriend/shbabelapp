import React, { Component } from 'react';
import WeatherApp from '../../OpenWeather';
import ContentLayer from '../../Content/ContentLayer';
import MainLayer from '../../Content/MainLayer';
import cx from "classnames";
import styles from "./styles.scss";

// import PageTitle from '../../PageTitle';
// import bannerImg from '../../../media/weatherPage/banner-clouds.jpg';

class Page extends Component {
  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}  showHeader={true} showFooterReveal={false} showFooterFixed={false}>
        <ContentLayer className={cx(styles.contentLayer)} showHeader={true} showFooterReveal={false} showFooterFixed={false}>
          {/*<PageTitle title={ 'Weather' } layout={'full'} backgroundColor={ '#282828' }  backgroundImg={ bannerImg } style={{}} />*/}
          <WeatherApp />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default Page;

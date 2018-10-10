import React, {Component} from 'react';
import Slider from "react-slick";
import styles from './styles.scss'
import cx from "classnames";

class Carousel extends Component {

  render() {

    let settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 200,
      autoplaySpeed: 5000,
      cssEase: "linear",

    };

    return (
      <div className="container">
        <Slider {...settings}>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>1</h3>
            </div>
          </div>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>2</h3>
            </div>
          </div>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>3</h3>
            </div>
          </div>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>4</h3>
            </div>
          </div>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>5</h3>
            </div>
          </div>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>6</h3>
            </div>
          </div>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>7</h3>
            </div>
          </div>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>8</h3>
            </div>
          </div>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>9</h3>
            </div>
          </div>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>10</h3>
            </div>
          </div>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>11</h3>
            </div>
          </div>
          <div className={cx(styles.slide)}>
            <div className={cx(styles.inner)}>
              <h3>12</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;





import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import styles from './styles.scss'
import cx from "classnames";
import ScrollMagicEnhanced from './scrollMagicEnhanced'
import {get} from "lodash/fp";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Carousel extends Component {

  slideShowConfig(breakpoint) {
    switch(breakpoint) {
      case 'x-small':
        return 1;
      case 'small':
        return 2;
      case 'medium':
        return 4;
      case 'large':
        return 6;
      default:
        return 1;
    }
  }

  render() {

    const props = this.props;

    let settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: this.slideShowConfig(props.breakpoint),
      slidesToScroll: 1,
      autoplay: true,
      speed: 200,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };

    return (
      <div className={cx(styles.container, this.props.showCarousel ? styles.show : '' )} style={this.props.style}  >
        <Slider {...settings }>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/Frno9IpHxhCG757OBVNc9X1_rbIQCmlEoMH2pRSN5twKewGtoVbkdXXq-9BaeM9EvwzCUNSfWmh5S3mY5bg=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>

          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
               <img src={'https://lh3.googleusercontent.com/HvAlRTBgi7EtBhsj4sj0mKoIR9B6zpqq-PbHAUCsiJ2nDjrNb8NTwXkPLDv5c-4bFmWrnpwLYl9XSQxFVMoiAw=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/CFXE382UETlGfY2vfjEcBXATYtFUKmQkpXuLZLIlYyweewag5trNmW4kAd48NTr_kq1gOSBcDafoiCy0uiOn=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/ePmUWacJgpQxktf9De185eBUcC78OA33XXIT_fKNubu4EcvirS1ixMaBsTd_p4rW2vKSFdYH802nzwDNJqJyEA=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/CvafWy4XmGhmbTCSxLxad5_6tJDNPkgOX2Jovk0p0M9yWtE09ON8hywdB-YXb4Ypt7w-lgPkvKCeJZ8y46M=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/ZnMlAiha0R5xrZnMckHmQCB8c9ba3A20KUAIbk9GKr8_8BYQuqt8KJFRwTj2h7A4Mhr0_zBLYmzuXnHn9cXL=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/Frno9IpHxhCG757OBVNc9X1_rbIQCmlEoMH2pRSN5twKewGtoVbkdXXq-9BaeM9EvwzCUNSfWmh5S3mY5bg=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/HvAlRTBgi7EtBhsj4sj0mKoIR9B6zpqq-PbHAUCsiJ2nDjrNb8NTwXkPLDv5c-4bFmWrnpwLYl9XSQxFVMoiAw=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/CFXE382UETlGfY2vfjEcBXATYtFUKmQkpXuLZLIlYyweewag5trNmW4kAd48NTr_kq1gOSBcDafoiCy0uiOn=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/ePmUWacJgpQxktf9De185eBUcC78OA33XXIT_fKNubu4EcvirS1ixMaBsTd_p4rW2vKSFdYH802nzwDNJqJyEA=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/CvafWy4XmGhmbTCSxLxad5_6tJDNPkgOX2Jovk0p0M9yWtE09ON8hywdB-YXb4Ypt7w-lgPkvKCeJZ8y46M=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/ZnMlAiha0R5xrZnMckHmQCB8c9ba3A20KUAIbk9GKr8_8BYQuqt8KJFRwTj2h7A4Mhr0_zBLYmzuXnHn9cXL=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/Frno9IpHxhCG757OBVNc9X1_rbIQCmlEoMH2pRSN5twKewGtoVbkdXXq-9BaeM9EvwzCUNSfWmh5S3mY5bg=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/HvAlRTBgi7EtBhsj4sj0mKoIR9B6zpqq-PbHAUCsiJ2nDjrNb8NTwXkPLDv5c-4bFmWrnpwLYl9XSQxFVMoiAw=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/CFXE382UETlGfY2vfjEcBXATYtFUKmQkpXuLZLIlYyweewag5trNmW4kAd48NTr_kq1gOSBcDafoiCy0uiOn=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/ePmUWacJgpQxktf9De185eBUcC78OA33XXIT_fKNubu4EcvirS1ixMaBsTd_p4rW2vKSFdYH802nzwDNJqJyEA=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/CvafWy4XmGhmbTCSxLxad5_6tJDNPkgOX2Jovk0p0M9yWtE09ON8hywdB-YXb4Ypt7w-lgPkvKCeJZ8y46M=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
          <div className={cx(styles.slide,styles.once)}>
            <div className={cx(styles.inner)}>
              <div className={cx(styles.imageWrap)}>
                <img src={'https://lh3.googleusercontent.com/ZnMlAiha0R5xrZnMckHmQCB8c9ba3A20KUAIbk9GKr8_8BYQuqt8KJFRwTj2h7A4Mhr0_zBLYmzuXnHn9cXL=v0-rj-sc0x00FFFFFF-w120'} alt={""}/>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    breakpoint: get('appModule.breakpoint', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

Carousel.props = {
  breakpoint: PropTypes.string,
  showCarousel: PropTypes.bool,
  style: PropTypes.object,
};

Carousel.defaultProps = {
  breakpoint: 'small'
};

export default connect(mapStateToProps, mapDispatchToProps)(ScrollMagicEnhanced(Carousel));
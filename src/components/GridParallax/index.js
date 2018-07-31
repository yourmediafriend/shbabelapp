import React, { Component } from 'react';
import styles from './grid.scss';
import cx from 'classnames';

import gridImgSrc from '../../media/leopard.png';
import placeholderA from './media/placeholder-5000x500-1.jpg'
import placeholderB from './media/placeholder-5000x500-2.jpg'
import placeholderC from './media/placeholder-5000x500-3.jpg'
import placeholderD from './media/placeholder-5000x500-4.jpg'
import placeholderE from './media/placeholder-5000x500-5.jpg'
import placeholderF from './media/placeholder-5000x500-6.jpg'

import scrollMagicParallax from './scrollMagicParallax';

class GridViewItem extends Component {

  constructor(props) {
    super(props);
  }

  backgroundImageStyle = props => {
    return {
      height: '400px',
      width:'calc(100% + 10px)',
      position:'relative',
      top:'-5px',
      left: '-5px',
      backgroundImage: `url(${props.image})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }

  render() {
    return (
        <div className={cx(styles.item)}>
          <div className={cx(styles.inner, 'parallax-content-holder')}>
            <div className={cx(styles.imageWrapper, 'parallax-content')}>
              <div className={cx('parallax-image')} style={this.backgroundImageStyle(this.props)} />
              <div className={cx(styles.imageOverlay, 'parallax-overlay')}>
                <div className={cx(styles.titleWrapper)}>
                  <h4 className={cx(styles.title, styles.subTitle )}>
                    <span className={cx(styles.span)}>SubTitle</span>
                  </h4>
                  <h4 className={cx(styles.title)}>
                    <span className={cx(styles.span)}>This is the main Title</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

class GridView extends Component {


  items = (props) => {
    let imageArray =[placeholderA, placeholderB, placeholderC, placeholderD, placeholderE, placeholderF];
    let numrows = 21;
    let rows = [];
    for (let i = 0; i < numrows; i++) {
      rows.push(<GridViewItem image={imageArray[i % 6]}  key={i} />);
    }
    return rows;
  }

  render() {
    return (
      <div className={cx(styles.grid,'parallax')}>
        {this.items()}
      </div>
    )
  }
}

export default scrollMagicParallax(GridView);

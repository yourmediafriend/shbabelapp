import React, { Component } from 'react';
import styles from './gridViewStyles';
import gridImgSrc from '../../media/leopard.png';

import placeholderA from './media/placeholder-5000x500-1.jpg'
import placeholderB from './media/placeholder-5000x500-2.jpg'
import placeholderC from './media/placeholder-5000x500-3.jpg'
import placeholderD from './media/placeholder-5000x500-4.jpg'
import placeholderE from './media/placeholder-5000x500-5.jpg'
import placeholderF from './media/placeholder-5000x500-6.jpg'

import scrollMagicParallax from './scrollMagicParallax';
import Radium from "radium";

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
// ...Radium.getState(this.state, 'main', ':hover') ? this.itemHoverStyle().item.inner : {}
    return (
      <div style={styles.grid.item}>
        <div className='parallax-content-holder'  style={{...styles.grid.item.inner }} >
            <div  className='parallax-content' style={styles.grid.item.imageWrapper}>
            <div className="parallax-image" style={this.backgroundImageStyle(this.props)} />
            <div className="parallax-overlay" style={styles.grid.item.imageOverlay} >
              <div style={{...styles.grid.item.titleWrapper}}>
                <h4 style={{...styles.grid.item.title, ...styles.grid.item.subTitle}}>
                  <span style={styles.grid.item.title.span}>SubTitle</span>
                </h4>
                <h4 style={styles.grid.item.title}>
                  <span style={styles.grid.item.title.span}>This is the main Title</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

GridViewItem = Radium(GridViewItem);

class GridView extends Component {

  constructor(props) {
    super(props);
  }

  items(props) {
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
      <div  className="parallax" style={{...styles.grid.base}}>
        {this.items()}
      </div>
    )
  }
}

GridView = Radium(GridView);

export default scrollMagicParallax(GridView);

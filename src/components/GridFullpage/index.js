import React, { Component } from 'react';
import styles from './styles.scss';
import cx from 'classnames';

import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';



import placeholderA from './media/placeholder-5000x500-1.jpg'
import placeholderB from './media/placeholder-5000x500-2.jpg'
import placeholderC from './media/placeholder-5000x500-3.jpg'
import placeholderD from './media/placeholder-5000x500-4.jpg'
import placeholderE from './media/placeholder-5000x500-5.jpg'
import placeholderF from './media/placeholder-5000x500-6.jpg'


class GridViewItem extends Component {

  backgroundImageStyle = props => {
    return {
      height: '400px',
      width:'100%',
      position:'relative',
      backgroundImage: `url(${props.image})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }

  render() {
    return (
      <ListGroupItem className={cx(styles.item)}>
        <div className={cx(styles.inner)}>
          <div className={cx(styles.imageWrapper)}>
            <div className={cx('parallax-image')} style={this.backgroundImageStyle(this.props)} />
            <div className={cx(styles.imageOverlay)}>
              <div className={cx(styles.content)}>
                <div className={cx(styles.titleWrapper)}>
                  <h4 className={cx(styles.title, styles.mainTitle )}>
                    <span className={cx(styles.span)}>Title</span>
                  </h4>
                  <h4 className={cx(styles.title, styles.subTitle)}>
                    <span className={cx(styles.span)}>This is the  Sub Title</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ListGroupItem>
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
      <ListGroup className={cx(styles.grid)}>
        {this.items()}
      </ListGroup>
    )
  }
}

export default GridView;

import React, { Component } from 'react';
import styles from './styles.scss';
import cx from 'classnames';
import { Query } from "react-apollo";
import gridPlaceholderQuery from '../../graphQL/gridPlaceholderQuery';
import { ListGroup, ListGroupItem } from 'reactstrap';
import scrollMagicParallax from './scrollMagicParallax';
import ReactHoverObserver from '../ReactHoverObserver';
import Tilt from 'react-vanilla-tilt'

import placeholderA from '../../media/placeholders/placeholder-5000x500-1.jpg'
import placeholderB from '../../media/placeholders/placeholder-5000x500-2.jpg'
import placeholderC from '../../media/placeholders/placeholder-5000x500-3.jpg'
import placeholderD from '../../media/placeholders/placeholder-5000x500-4.jpg'
import placeholderE from '../../media/placeholders/placeholder-5000x500-5.jpg'
import placeholderF from '../../media/placeholders/placeholder-5000x500-6.jpg'

const placeholderImages = [placeholderA, placeholderB, placeholderC, placeholderD, placeholderE, placeholderF];


class GridViewContent extends Component {

  getPlaceholderImage () {
    return placeholderImages[this.props.id % placeholderImages.length]
  }

  backgroundImageStyle() {
    return {
      height: '400px',
      width:'calc(100% + 10px)',
      position:'relative',
      top:'-5px',
      left: '-5px',
      backgroundImage: `url(${this.getPlaceholderImage()})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }

  render() {
    return (
      <Tilt options={{scale: 2, max: 25}} style={{transformStyle: 'preserve-3d'}}>
        <div className={cx(styles.inner)}>
          <div className={cx(styles.imageWrapper)}>
            <div className={cx()} style={this.backgroundImageStyle()}/>
            <div className={cx(styles.imageOverlay)}>
              <div className={cx(styles.titleWrapper)}>
                <h4 className={cx(styles.title, styles.mainTitle)}>
                  <span className={cx(styles.span)}>{this.props.title}</span>
                </h4>
                <h4 className={cx(styles.title, styles.subTitle)}>
                  <span className={cx(styles.span)}>{this.props.fieldSubTitle}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    )
  }
}

class GridViewItem extends Component {

  render() {
    return(
      <ListGroupItem className={cx(styles.item, styles.aniLfr,)} data-delay="0.3" data-speed="0.35" data-animation="long-from-right">
        <GridViewContent {...this.props}/>
      </ListGroupItem>
    )
  }
}


let GridView = props => {
  return (
    <ListGroup className={cx(styles.grid)}>
      {props.data.nodeQuery.entities.map((node, index) =>
        <GridViewItem {...node} key={index} id={index}/>
      )}
    </ListGroup>
  );
};

GridView = scrollMagicParallax(GridView);

class GridViewQuery extends Component {

  render() {
    return (
      <Query query={gridPlaceholderQuery} variables={{ limit:this.props.itemsMax ? this.props.itemsMax : '18' }} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          if (data.nodeQuery.entities.length) {
            return (
              <GridView data={data} />
            );
          }
        }}
      </Query>
    );
  }
}



export default GridViewQuery;

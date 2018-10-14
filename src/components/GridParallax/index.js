import React, { Component } from 'react';
import styles from './grid.scss';
import cx from 'classnames';
import scrollMagicParallax from './scrollMagicParallax';
import { Query } from "react-apollo";
import gridPlaceholderQuery from '../../graphQL/gridPlaceholderQuery';
import { ListGroup, ListGroupItem } from 'reactstrap';


import placeholderA from './media/placeholder-5000x500-1.jpg'
import placeholderB from './media/placeholder-5000x500-2.jpg'
import placeholderC from './media/placeholder-5000x500-3.jpg'
import placeholderD from './media/placeholder-5000x500-4.jpg'
import placeholderE from './media/placeholder-5000x500-5.jpg'
import placeholderF from './media/placeholder-5000x500-6.jpg'

const placeholderImages = [placeholderA, placeholderB, placeholderC, placeholderD, placeholderE, placeholderF];

class GridViewItem extends Component {


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
        <ListGroupItem className={cx(styles.item)}>
          <div className={cx(styles.inner, 'parallax-content-holder')}>
            <div className={cx(styles.imageWrapper, 'parallax-content')}>
              <div className={cx('parallax-image')} style={this.backgroundImageStyle()} />
              <div className={cx(styles.imageOverlay, 'parallax-overlay')}>
                <div className={cx(styles.titleWrapper)}>
                  <h4 className={cx(styles.title, styles.mainTitle )}>
                    <span className={cx(styles.span)}>{this.props.title}</span>
                  </h4>
                  <h4 className={cx(styles.title, styles.subTitle)}>
                    <span className={cx(styles.span)}>{this.props.fieldSubTitle}</span>
                  </h4>
                </div>
              </div>
            </div>

            <div className={cx(styles.body)}>
              {this.props.body.summary}
            </div>






          </div>
        </ListGroupItem>
    )
  }
}

class GridView extends Component {

  render() {
    return (
      <Query query={gridPlaceholderQuery} variables={{ limit:this.props.itemsMax ? this.props.itemsMax : '18'}} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          if (data.nodeQuery.entities.length) {
            return (
              <ListGroup className={cx(styles.grid, 'parallax')}>
                {data.nodeQuery.entities.map((node, index) =>
                  <GridViewItem {...node} key={index} id={index}/>
                )}
              </ListGroup>
            );
          }
        }}
      </Query>
    );
  }
}



export default scrollMagicParallax(GridView);

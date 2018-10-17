import React, { Component } from 'react';
import styles from './styles.scss';
import cx from 'classnames';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Query } from "react-apollo";
import gridPlaceholderQuery from '../../graphQL/gridPlaceholderQuery';

import placeholderA from '../../media/placeholders/placeholder-5000x500-1.jpg'
import placeholderB from '../../media/placeholders/placeholder-5000x500-2.jpg'
import placeholderC from '../../media/placeholders/placeholder-5000x500-3.jpg'
import placeholderD from '../../media/placeholders/placeholder-5000x500-4.jpg'
import placeholderE from '../../media/placeholders/placeholder-5000x500-5.jpg'
import placeholderF from '../../media/placeholders/placeholder-5000x500-6.jpg'

const placeholderImages = [placeholderA, placeholderB, placeholderC, placeholderD, placeholderE, placeholderF];

class GridViewItem extends Component {


  getPlaceholderImage () {
    return placeholderImages[this.props.id % placeholderImages.length]
  }


  backgroundImageStyle() {
    return {
      height: '350px',
      width:'100%',
      position:'relative',
      backgroundImage: `url(${this.getPlaceholderImage()})`,
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
            <div className={cx('parallax-image')} style={this.backgroundImageStyle()} />
            <div className={cx(styles.imageOverlay)}>
              <div className={cx(styles.content)}>
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
          </div>
        </div>
      </ListGroupItem>
    )
  }
}

/*class GridView extends Component {

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
}*/


class GridView extends Component {

  render() {
    return (
      <Query query={gridPlaceholderQuery} variables={{ limit:20 }} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          if (data.nodeQuery.entities.length) {
            return (
              <ListGroup className={cx(styles.grid)}>
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



export default GridView;

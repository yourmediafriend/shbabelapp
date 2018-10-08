import React from 'react';
import styles from './styles.scss';

import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

const FeatureListItem = props => {

  return (
    <ListGroupItem className={styles.listGroupItem}>
      <div>
        <img src="http://www.pixijs.com/wp/wp-content/uploads/feature-multiplatform.png"
             alt="Multi-platform Support graphic"  />
        <div className="text">
          <h6 className="bold">Multi-platform Support</h6>
          <p className="big-text">Interactive, visually compelling content on desktop, mobile and beyond, all
            reached with a single codebase to deliver transferable experiences.</p>
        </div>
      </div>
    </ListGroupItem>
  );

}




const FeatureList = props => {
  return (
    <div>
      <ListGroup className={styles.listGroup}>
        <FeatureListItem/>
        <FeatureListItem/>
        <FeatureListItem/>
        <FeatureListItem/>
        <FeatureListItem/>
        <FeatureListItem/>
        <FeatureListItem/>
        <FeatureListItem/>
        <FeatureListItem/>
        <FeatureListItem/>
      </ListGroup>
    </div>
  );
}

export default FeatureList;

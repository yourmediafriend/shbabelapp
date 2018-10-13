import React from 'react';
import styles from './styles.scss';
import ScrollMagicEnhanced from './scrollMagicEnhanced';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import cx from 'classnames'

const FeatureListItem = props => {

  return (
    <ListGroupItem className={cx(styles.listGroupItem)} data-delay={Math.round(props.delay * 100) / 100}>
      <div>
        <img src="http://www.pixijs.com/wp/wp-content/uploads/feature-multiplatform.png"
             alt="Multi-platform Support graphic"  className={cx(styles.img,'img')} />
        <div className={cx(styles.text,'text')}>
          <h6 className="bold">Multi-platform Support</h6>
          <p className="big-text">Interactive, visually compelling content on desktop, mobile and beyond, all
            reached with a single codebase to deliver transferable experiences.</p>
        </div>
      </div>
    </ListGroupItem>
  );
}


const FeatureList = props => {

  const data = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  const delay = 1;

  return (
    <ListGroup id='FeatureList' className={styles.listGroup}  >

      {data.map((item, index) => {
        return (<FeatureListItem key={index} delay={index * delay}/>);
      })}

    </ListGroup>
  );
}

export default ScrollMagicEnhanced(FeatureList);
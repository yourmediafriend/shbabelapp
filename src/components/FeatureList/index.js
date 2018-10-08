import React from 'react';
import styles from './styles.scss';
import ScrollMagicEnhanced from './scrollMagicEnhanced';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import cx from 'classnames'
import { Query } from "react-apollo";
import featureListQuery from '../../graphQL/featureListQuery';

const FeatureListItem = props => {

  const { content } = props;
  return (
    <ListGroupItem className={cx(styles.listGroupItem)} data-delay={Math.round(props.delay * 100) / 100}>
      <div>
        <img src="http://www.pixijs.com/wp/wp-content/uploads/feature-multiplatform.png"
             alt="Multi-platform Support graphic"  className={cx(styles.img,'img')} />
        <div className={cx(styles.text,'text')}>
          <h6 className="bold"><span>{content.title}</span></h6>
          {content.fieldBody ? <p>{content.fieldBody}</p> : ''}
        </div>
      </div>
    </ListGroupItem>
  );
}


const FeatureList = props => {

  const dataDummy = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  const delay = 1;

  return (
    <Query query={featureListQuery} >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return `Error: ${error.message}`;
        if (data.nodeQuery.entities.length) {
          return (
            <ListGroup id='FeatureList' className={styles.listGroup}  >
              {data.nodeQuery.entities.map((item, index) => <FeatureListItem key={index} content={item}  delay={index * delay} />)}
            </ListGroup>
          )
        }
        return null; // replace this with something relevant
      }}
    </Query>
  )

}

export default ScrollMagicEnhanced(FeatureList);

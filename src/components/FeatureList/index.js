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

let FeatureListGroup = props => {

  const delay = 1;
  console.log('FeatureListGroup', props);
  return (
    <ListGroup id='FeatureList' className={styles.listGroup}  >
      {props.data.nodeQuery.entities.map((item, index) => <FeatureListItem key={index} content={item} delay={index * delay} />)}
    </ListGroup>
  );
}

FeatureListGroup = ScrollMagicEnhanced(FeatureListGroup);

const FeatureListQuery = props => {

  return (
    <Query query={featureListQuery} >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return `Error: ${error.message}`;
        if (data.nodeQuery.entities.length) {
          console.log('FeatureListQuery', data);
          return (
            <FeatureListGroup data={data} />
          )
        }
        return null; // replace this with something relevant
      }}
    </Query>
  )

}

export default FeatureListQuery;

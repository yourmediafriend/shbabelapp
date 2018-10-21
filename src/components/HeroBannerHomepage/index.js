import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './homepageHero.scss'
import ScrollMagicEnhanced from "./scrollMagicEnhanced";
import cx from "classnames";

import { Query } from "react-apollo";
import hompageSlidesQuery from '../../graphQL/hompageSlidesQuery';

const SectionSlide = (props) => {

  //debugger;
  //console.log(splitBackgroundText(props.fieldBackgroundText));
  return (
    <section  className={cx(styles.section, 'section')}>
      <div className={cx(styles.mainText)}>
        <div className={cx(styles.inner)}>
          {props.body.summary}
        </div>
      </div>
    </section>
  );
}

let Sections = ({data}) => {
  //console.log(splitBackgroundText(props.fieldBackgroundText));
  return (
    <div id={'home-hero'}>
      <div className={cx(styles.content, styles.hero)}>
        {data.nodeQuery.entities.map((node, index) =>
          <SectionSlide {...node} key={index} id={index} />
        )}
      </div>
    </div>
  );
}

Sections = ScrollMagicEnhanced(Sections);

class HomepageHero extends Component {
  render() {
    return (
      <Query query={hompageSlidesQuery} variables={{ limit:4 }} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          if (data.nodeQuery.entities.length) {
            return (
              <Sections setActiveSceneId={this.props.setActiveSceneId} data={data}/>
            );
          }
        }}
      </Query>
    );
  }
}

export default HomepageHero;
import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import SVGInline from "react-svg-inline"
import cx from 'classnames';
import styles from './davidCarson.scss';
import {hoverSindy} from "../../../modules/Fullpage";
import {get} from "lodash/fp";

import SexShape from '../../../media/fullpage-slides/dark/sex-shape.svg';
import SideShape from '../../../media/fullpage-slides/dark/side-shape.svg';
import ContentShape from '../../../media/fullpage-slides/dark/content-shape.svg';

import Lightening from '../../Svgs/lightening'

const LighteningComp = (props) => {
  return (
    <div className={cx(styles.layer, styles.lightning)}>
      <Lightening className={styles.svgWrap}/>
    </div>
  )
}

const getactiveTextRef = (breakpoint) => {
  switch(breakpoint) {
    case 'x-small':
      return ;
    case 'small':
      return ;
    case 'medium':
      return;
    case 'large':
      return <LighteningComp />;
    default:
      return;
  }
};

const Slide = (props) => {
  return (
    <div className={cx(styles.inner)}>

      <div className={cx(styles.layer, styles.svg)}>
        <SVGInline svg={ContentShape} className={cx(styles.shape, styles.contentShape )} />
      </div>
      <div className={cx(styles.layer, styles.svg)}>
        <SVGInline svg={SexShape} className={cx(styles.shape, styles.sexShape )} />
      </div>
      <div className={cx(styles.layer, styles.svg)}>
        <SVGInline svg={SideShape} className={cx(styles.shape, styles.sideShape )} />
      </div>

      {getactiveTextRef(props.breakpoint)}

      <div className={cx(styles.layer, styles.main)}>

        <h3>is it you, what will I recieve</h3>
        <h1>monkey see monkey do</h1>
        <blockquote>he had recently cut out of an illustratedmagazine and housed in a nice,gilded frame.</blockquote>

        <div className={cx(styles.content, styles.mainText)}>
          <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
          <p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
          <p>The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
          <p>His many legs, <span className={cx(styles.highlite)}>pitifully thin compared with the size of the rest of him</span>, waved about helplessly as he looked.</p>
          <p>"What's happened to me? " he thought. It wasn't a dream.</p>
          <p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
          <p>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
          <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.</p>
          <p>Gregor then turned to look out the window at the dull weather.</p>
        </div>

      </div>
    </div>
  );
};


Slide.propTypes = {
  hoverValue: PropTypes.bool,
};

Slide.defaultProps = {
  hoverValue: false
};

export const mapStateToProps = (state) => {
  return {
    activeTextRef: get('fullpageModule.activeTextLayer', state),
    breakpoint: get('appModule.breakpoint', state),
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hoverSindy,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Slide);



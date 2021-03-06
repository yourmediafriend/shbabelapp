import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import SVGInline from "react-svg-inline"
import cx from 'classnames';
import ReactHoverObserver from '../../ReactHoverObserver';
import styles from './davidCarson.scss';
import {hoverSindy} from "../../../modules/Fullpage";
import {get} from "lodash/fp";

import sindy_1 from '../../../media/fullpage-slides/dark/sindy-1.jpg';
import sindy_2 from '../../../media/fullpage-slides/dark/sindy-2.jpg';
import sindy_3 from '../../../media/fullpage-slides/dark/sindy-3.jpg';

import jumpGif from '../../../media/fullpage-slides/dark/jumping.gif';

import dangerSkullGif from '../../../media/fullpage-slides/dark/dangerSkullA.gif';
import crownGif from '../../../media/fullpage-slides/dark/crownA.gif';
import balloonDogGif from '../../../media/fullpage-slides/dark/balloonDog.gif';

const Slide = (props) => {
  return (
    <div className={cx(styles.inner)}>

      <div className={cx(styles.layer, styles.sindy)}>
        <div className={cx(styles.center)}>

          <div className={cx(styles.imageWrap, styles.sindy_1)}>
            <ReactHoverObserver
              hoverDelayInMs={100}
              hoverOffDelayInMs={100}
              className={cx(styles.reactHoverObserver)}
              onMouseOver={props.hoverSindy.bind(this, 1)}
            >
              <img src={sindy_1} alt="" />
              <div className={styles.imageFrame} />
            </ReactHoverObserver>
          </div>

          <div className={cx(styles.imageWrap, styles.sindy_2)}>
            <ReactHoverObserver
              hoverDelayInMs={0}
              hoverOffDelayInMs={0}
              className={cx(styles.reactHoverObserver)}
              onMouseOver={props.hoverSindy.bind(this, 2)}
            >
              <img src={sindy_2} alt="" />
              <div className={styles.imageFrame} />
            </ReactHoverObserver>
          </div>

          <div className={cx(styles.imageWrap, styles.sindy_3)}>
            <ReactHoverObserver
              hoverDelayInMs={100}
              hoverOffDelayInMs={100}
              onMouseOver={props.hoverSindy.bind(this, 3)}
              className={cx(styles.reactHoverObserver)}
            >
              <img src={sindy_3} alt="" />
              <div className={styles.imageFrame} />
            </ReactHoverObserver>
          </div>

        </div>
      </div>

      <div className={cx(styles.layer, styles.gif)}>
        <img src={jumpGif} className={styles.jumping} alt="" />
{/*        <img src={lightningAGif} className={styles.lightning} alt="" />*/}

        {props.activeTextRef === 1 ? <img src={dangerSkullGif} className={styles.skull} alt="" /> : '' }
        {props.activeTextRef === 2 ? <img src={crownGif} className={styles.crown} alt="" /> : '' }
        {props.activeTextRef === 3 ? <img src={balloonDogGif} className={styles.ballonDog} alt="" /> : '' }

      </div>


      <div className={cx(styles.layer, styles.content)}>
        <div className={cx(styles.textOverlayWrap)}>
          <div className={cx(styles.wrap, styles.wrap_1, props.activeTextRef === 1 ? styles.active : '' )}>
            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
            <p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
            <p>The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
            <p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me? " he thought.</p>
            <p>It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
            <p>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
            <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops</p>
          </div>
          <div className={cx(styles.wrap, styles.wrap_2, props.activeTextRef === 2 ? styles.active : '')}>
            <p>The quick, brown fox jumps over a lazy dog.</p>
            <p>DJs flock by when MTV ax quiz prog.</p>
            <p>Junk MTV quiz graced by fox whelps.</p>
            <p>Bawds jog, flick quartz, vex nymphs.</p>
            <p>Waltz, bad nymph, for quick jigs vex!</p>
            <p>Fox nymphs grab quick-jived waltz.</p>
            <p>Brick quiz whangs jumpy veldt fox.</p>
            <p>Bright vixens jump; dozy fowl quack.</p>
            <p>Quick wafting zephyrs vex bold Jim.</p>
            <p>Quick zephyrs blow, vexing daft Jim.</p>
            <p>Sex-charged fop blew my junk TV quiz.</p>
            <p>How quickly daft jumping zebras vex.</p>
            <p>Two driven jocks help fax my big quiz.</p>
            <p>Quick, Baz, get my woven flax jodhpurs!</p>
            <p>"Now fax quiz Jack! " my brave</p>
          </div>
          <div className={cx(styles.wrap, styles.wrap_3, props.activeTextRef === 3 ? styles.active : '')}>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const SlideWrap = ({activeTextRef, breakpoint, hoverSindy}) => {

  const getactiveTextRef = () => {

    console.log(breakpoint);

    switch(breakpoint) {
      case 'x-small':
        return 1;
      case 'small':
        return 2;
      case 'medium':
        return 3;
      case 'large':
        return activeTextRef;
      default:
        return activeTextRef;
    }
  };

  return (
    <Slide activeTextRef={getactiveTextRef()} hoverSindy={hoverSindy} />
  );

}

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

export default connect(mapStateToProps, mapDispatchToProps)(SlideWrap);



import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import SVGInline from "react-svg-inline"
import cx from 'classnames';
import styles from './davidCarson.scss';
import {hoverSindy} from "../../../modules/Fullpage";
import {get} from "lodash/fp";
import barsSvg from '../../../media/fullpage-slides/dark/bars.svg';
import caveGif from '../../../media/fullpage-slides/dark/cave.gif';

const Slide = (props) => {
  return (
    <div className={cx(styles.inner)}>

      <div className={cx(styles.layer,styles.headings)}>
        <div className={cx(styles.content, styles.headA)}>
          <h2>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</h2>
        </div>
      </div>

      <div className={cx(styles.layer,styles.text)}>
        <div className={cx(styles.content, styles.redText)}>
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

        <div className={cx(styles.content, styles.whiteText)}>
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


      <div className={cx(styles.layer, styles.gif)}>
        <img src={caveGif} className={styles.cave} alt="" />
      </div>


      <div className={cx(styles.layer,styles.main)}>
        <div className={cx(styles.content, styles.bars)}>
          <SVGInline svg={barsSvg} className={cx(styles.shape, styles.contentShape )} />
        </div>
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
          <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
          <p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
          <p>The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
          <p>His many legs, <span className={cx(styles.highlite)}>pitifully thin compared with the size of the rest of him</span>, waved about helplessly as he looked.</p>
          <p>"What's happened to me? " he thought. It wasn't a dream.</p>
          <p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
          <p>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
          <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.</p>
          <p>Gregor then turned to look out the window at the dull weather.</p>
          <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
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



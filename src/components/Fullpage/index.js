import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import SVGInline from "react-svg-inline"
import cx from 'classnames';
import styles from './fullpage.scss';

import SexShape from '../../media/fullpage-slides/dark/sex-shape.svg';
import SideShape from '../../media/fullpage-slides/dark/side-shape.svg';
import ContentShape from '../../media/fullpage-slides/dark/content-shape.svg';

import sindy_1 from '../../media/fullpage-slides/dark/sindy-1.jpg';
import sindy_2 from '../../media/fullpage-slides/dark/sindy-2.jpg';
import sindy_3 from '../../media/fullpage-slides/dark/sindy-3.jpg';

import Lightening from '../Svgs/lightening'

// import Circle from '../SvgAnimations/CircleComp';
// import Triangle from '../SvgAnimations/TriangleComp';
// import Square from '../SvgAnimations/SquareComp';

const FullpageSlides = fullpageApi => {
  return (
    <div>

      <div className={cx(styles.section, styles.section_1, 'section')}>
        <div className={cx(styles.inner)}>
          <div className={cx(styles.layer)}>
            <SVGInline svg={ContentShape} className={cx(styles.shape, styles.contentShape )} />
          </div>
          <div className={cx(styles.layer)}>
            <SVGInline svg={SexShape} className={cx(styles.shape, styles.sexShape )} />
          </div>
          <div className={cx(styles.layer)}>
              <SVGInline svg={SideShape} className={cx(styles.shape, styles.sideShape )} />
          </div>
          <div className={cx(styles.layer, styles.layer_1)}>
            <h3>is it you, what will I recieve</h3>
            <h1>monkey see monkey do</h1>
            <blockquote>he had recently cut out of an illustratedmagazine and housed in a nice,gilded frame.</blockquote>
            <div className={cx(styles.content)}>
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
      </div>

      <div className={cx(styles.section, styles.section_2, 'section')}>
        <div className={cx(styles.inner)}>
          <div className={cx(styles.layer)}>
            <Lightening className={styles.Mainlightening}  />
          </div>
          <div className={cx(styles.layer, styles.sindy)}>
            <div className={cx(styles.center)}>
              <div className={cx(styles.imageWrap, styles.sindy_1)}>
                <img src={sindy_1} alt="" />
  {/*              <Lightening className={styles.lightening}/>*/}
                <div className={styles.imageFrame} />
              </div>
              <div className={cx(styles.imageWrap, styles.sindy_2)}>
                <img src={sindy_2} alt="" />
                <div className={styles.imageFrame} />
              </div>
              <div className={cx(styles.imageWrap, styles.sindy_3)}>
                <img src={sindy_3} alt="" />
                <div className={styles.imageFrame} />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className={cx(styles.section, styles.section_3, 'section')}>

      </div>
      <div className={cx(styles.section, styles.section_4, 'section')}>

      </div>
    </div>
  );
};

const FullpageWrapper = props => {

  const fullPageOptions = { };

  return (
    <ReactFullpage {...fullPageOptions}  render={({ state, fullpageApi }) => {
     return FullpageSlides(fullpageApi)
  }}/>);

};

export default FullpageWrapper;


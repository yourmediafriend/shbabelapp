import React, { Component } from 'react';
import cx from 'classnames';
import styles from './homepage.scss'
import ScrollMagicEnhanced from './scrollMagicEnhanced';

import { OneColumnCenter }  from '../../Layout';
import Dummytext from '../../DummyText/DummyTextLong';
import HomeCanvas from './HomeCanvas';


const UpdateTileCount = (count) => {

  console.log(count);

}



const FixedBackground = (props) => {
  return (
    <div className={cx(styles.fixedBackgroundLayer)} >
      <HomeCanvas activeSceneId={props.activeSceneId} />
      <div style={{position:'absolute',top:'100px',left:'100px'}}>
        {props.activeSceneId}
      </div>
    </div>
  )
};

class Page extends Component {
  render() {
    return (
      <div className={cx(styles.homepage)}>
        <FixedBackground activeSceneId={this.props.activeSceneId} />
        <div className={cx(styles.content)}>
          <section className={cx(styles.section)}>
            <div className={cx(styles.mainText)}>
              <div className={cx(styles.inner)}>
                <h1>{this.props.title}</h1>
                Creative vision, technologies and digital experience
              </div>
            </div>
          </section>
          <section className={cx(styles.section)}>
            <div className={cx(styles.mainText)}>
              <div className={cx(styles.inner)}>
                section 2
              </div>
            </div>
          </section>
          <section className={cx(styles.section)}>
            <div className={cx(styles.mainText)}>
              <div className={cx(styles.inner)}>
                section 3
              </div>
            </div>
          </section>
          <section className={cx(styles.section)}>
            <div className={cx(styles.mainText)}>
              <div className={cx(styles.inner)}>
                section 4
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

//export default Page;
export default ScrollMagicEnhanced(Page);

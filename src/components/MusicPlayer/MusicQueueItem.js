import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {closeQueuePopUp, loadTrack} from "../../modules/MusicPlayer";
import {get} from "lodash/fp";
import styles from './musicPlayer.scss'
import cx from 'classnames';
import { Query } from "react-apollo";

import { Image } from 'cloudinary-react';


const QueueItem = ({ article, loadTrack }) => {

  return (
    <div className={cx(styles.item)} onClick={loadTrack.bind(this, article.fieldTrack.uri)}>
      <div className={cx(styles.cover)}>
        <Image cloudName="dghff7rpa" publicId={`Mixes/${article.fieldCover}`} width="40" crop="scale" />
      </div>
      <div className={cx(styles.details)}>
        <div className={cx(styles.title)}>
          <a href='#'>{article.title}</a>
        </div>
        <div className={cx(styles.artist)}>{article.fieldArtist}</div>
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadTrack,
    },
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QueueItem);

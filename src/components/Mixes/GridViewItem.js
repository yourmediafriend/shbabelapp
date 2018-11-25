import React from 'react';
import styles from './styles.scss';
import cx from 'classnames';
import { ListGroupItem } from 'reactstrap';
import { Image } from 'cloudinary-react';
import { playPause } from "../../modules/MusicPlayer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadTrack } from "../../modules/MusicPlayer";
import { get } from "lodash/fp";

import PlayPauseButton from "./Button";

let GridViewItem = (props)  => {

  const {nid, fieldArtist, title, fieldCover, loadTrack, playPause,  track} = props;

  return(
    <ListGroupItem className={cx(styles.item)} >
      <div className={cx(styles.inner)} >
        <div className={cx(styles.imageWrapper, styles.cover)}  onClick={nid === track.nid ? playPause.bind(this) : loadTrack.bind(this, props)}   >
          <Image cloudName="dghff7rpa" publicId={`mix/${fieldCover}`} crop="scale" />
          <div className={cx(styles.imageOverlay)}>
            <PlayPauseButton {...props} />
          </div>
        </div>
        <div className={cx(styles.details)}>
          <div className={cx(styles.title)}>
            <span>{title}</span>
          </div>
          <div className={cx(styles.artist)}>{fieldArtist}</div>
        </div>
      </div>
    </ListGroupItem>
  );
};

const mapStateToProps = (state) => {
  return {
    track: get('musicPlayerModule.track', state),
    playing: get('musicPlayerModule.playing', state),
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadTrack,
      playPause,
    },
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GridViewItem);
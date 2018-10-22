import React, { Component } from 'react';
import styles from './styles.scss';
import cx from 'classnames';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Query } from "react-apollo";
import gridQuery from '../../graphQL/musicPlayerQuery';
import { Image } from 'cloudinary-react';

import Icon from '../Icons';

import {
  playPause
} from "../../modules/MusicPlayer";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loadTrack} from "../../modules/MusicPlayer";
import {get} from "lodash/fp";

let PlayPauseButton = (props)  => {
  const {nid, track, playing } = props;
  return (
    <button className={cx(styles.button, styles.playpause)} >
      {track.nid === nid && playing ? <span className={cx(styles.icon, styles.pause)}><Icon icon={'pause'} /></span> : <span className={cx(styles.icon, styles.play)}><Icon icon={'play'} /></span>}
    </button>
  )
}



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

GridViewItem = connect(mapStateToProps, mapDispatchToProps)(GridViewItem);


let GridView = (props) => {
  return (
    <ListGroup className={cx(styles.grid, props.className)}>
      {props.data.nodeQuery.entities.map((node, index) =>
        <GridViewItem {...node} key={index} id={index} {...props} />
      )}
    </ListGroup>
  );
}

class GridViewQuery extends Component {

  render() {
    return (
      <Query query={gridQuery} variables={{ limit:20 }} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          if (data.nodeQuery.entities.length) {
            return (
              <GridView data={data} {...this.props} />
            );
          }
        }}
      </Query>
    );
  }
}

export default GridViewQuery;

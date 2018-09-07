import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { closeQueuePopUp } from "../../modules/MusicPlayer";
import {get} from "lodash/fp";
import styles from './musicPlayer.scss'
import cx from 'classnames';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ListGroup, ListGroupItem } from 'reactstrap';
import QueueItem from './MusicQueueItem';

import musicPlayerQuery from '../../graphQL/musicPlayerQuery';

import Icon from '../Icons';

const Playlist = () => {
  return (
    <Query query={musicPlayerQuery} >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return `Error: ${error.message}`;
        if (data.nodeQuery.entities.length) {
          //console.log('music',data.nodeQuery.entities);
          return (
            <ListGroup>
              {data.nodeQuery.entities.map(article => <ListGroupItem key={article.nid}><QueueItem article={article} /></ListGroupItem>)}
            </ListGroup>
          )
        }
        return null; // replace this with something relevant
      }}
    </Query>
  );
}

const musicQueuePopUp  = ({popUpIsOpen, loadTrack, closeQueuePopUp}) => {
  return (
    <div className={cx(styles.popUp, popUpIsOpen ? styles.visible : '')}>
      <div className={cx(styles.inner)}>
        <div className={cx(styles.header)}>
          <div onClick={closeQueuePopUp} className={cx(styles.close)}>
            <Icon icon={'close'}  />
          </div>
        </div>
        <Playlist />
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => {
  return {
    popUpIsOpen: get('musicPlayerModule.popUpIsOpen', state),
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeQueuePopUp,
    },
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(musicQueuePopUp);

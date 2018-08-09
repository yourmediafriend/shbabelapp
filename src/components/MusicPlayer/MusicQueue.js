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

const GET_TRACKS = gql`
  {
    nodeQuery(filter: {conditions: [{operator: EQUAL, field: "type", value: ["mixes"]}]}) {
      entities {
        ... on Node {
          nid
          title
          fieldTrack {
            uri
          }
          fieldArtist
          fieldCover
        }
      }
    }
  }
  `;

const Playlist = () => {
  return (
    <Query query={GET_TRACKS} >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return `Error: ${error.message}`;
        //console.log(data);
        //console.log(data.nodeQuery.entities);

        if (data.length) {
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


const musicQueuePopUp  = ({popUpIsOpen, loadTrack}) => {
  return (
    <div className={cx(styles.popUp, popUpIsOpen ? styles.visible : '')}>
      <div className={cx(styles.inner)}>
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

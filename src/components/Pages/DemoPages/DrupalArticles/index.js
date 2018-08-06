import React, { Component } from 'react';
import styles from './quickCompStyles';
import { OneColumnCenter }  from '../../../Layout';
import PageTitle from '../../../PageTitle'
import Dummytext from '../../../DummyText/DummyTextLong';


import { Query } from "react-apollo";
import gql from "graphql-tag";


const ArticleTeaser = ({ article }) => (
  <div>
    <h3>{article.fieldTrack.uri}</h3>
  </div>
);

/*
... on Node {
  nid
  title
  field_track
}
*/
const GET_ARTICLES = gql`
     {
      nodeQuery {
        entities {
          ... on Node {
            nid
            title
            body {
              value
            }
          }
        }
      }
    }
    `;

const GET_TRACKS = gql`
  {
    nodeQuery(filter: {conditions: [{operator: EQUAL, field: "type", value: ["mixes"]}]}) {
      entities {
        entityId
        entityLabel
      
        ... on Node {
          nid
          title
          fieldTrack {
            uri
          }
        }
      }
    }
  }
    `;

const ArticlesView = () => (

  <Query query={GET_TRACKS} >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return `Error: ${error.message}`;
      console.log(data);
      console.log(data.nodeQuery.entities);

      return (
        <ul>
          {data.nodeQuery.entities.map(article => <li key={article.nid}><ArticleTeaser article={article} /></li>)}
        </ul>
      )
    }}
  </Query>
);



class DemoPage extends Component {

  constructor(props) {
    super(props);
    super(props);
  }

  render() {
    return (
      <div>
        <PageTitle title={ 'Drupal Articles!' } layout={'center'} style={{}} />
        <OneColumnCenter contentMain={<ArticlesView />} />
      </div>
    )
  }
}

export default DemoPage;

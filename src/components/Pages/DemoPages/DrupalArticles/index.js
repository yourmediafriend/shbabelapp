import React, { Component } from 'react';
import { OneColumnCenter }  from '../../../Layout';
import PageTitle from '../../../PageTitle'

import { Query } from "react-apollo";
import gql from "graphql-tag";

const ArticleTeaser = ({ article }) => (
  <div>
    <h3>{article.title}</h3>
    <div>{article.body.value}</div>
  </div>
);

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

const ArticlesView = () => (

  <Query query={GET_ARTICLES} >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return `Error: ${error.message}`;

      console.log(data);
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

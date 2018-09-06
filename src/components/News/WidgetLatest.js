import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import styles from './news.scss';
import { Link } from 'react-router-dom';
import UtcSecondsToDate from './utcSecondsToDate';
import { ListGroup, ListGroupItem } from 'reactstrap';
import newsArticlesIndexQuery from "../../graphQL/newsArticlesIndexQuery";
import { Image as CloudImage, Transformation } from 'cloudinary-react';


const parseURL = (url) => {
  var parser = document.createElement('a'),
    searchObject = {},
    queries, split, i;
  // Let the browser do the work
  parser.href = url;
  // Convert query string to object
  queries = parser.search.replace(/^\?/, '').split('&');
  for( i = 0; i < queries.length; i++ ) {
    split = queries[i].split('=');
    searchObject[split[0]] = split[1];
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    searchObject: searchObject,
    hash: parser.hash
  };
}

const Category = ({category}) => {

  if (category) {
    return (
      <div className={styles.category}>
        {category.entity.name}
      </div>
    );
  }
  return null;
}

const Image = ({image}) => {

  if (image) {

    return (
      <div className={styles.image}>

{/*        <img src={`http://res.cloudinary.com/demo/image/fetch/w_40,h_40/${image.url}`}  />*/}




       {/* <CloudImage cloudName="dghff7rpa" publicId={image.url} alt={image.alt} width="40" crop="scale" />*/}

      </div>
    );
  }
  return null;
}


class NewsItem extends Component {

  render() {
    return (
      <ListGroupItem className={styles.item}>
        <div className={styles.summaryHeader}>
          <h2 className={styles.title}><Link to={`/news${this.props.url}`} className={styles.articleLink} >{this.props.title}</Link></h2>
          <Image image={this.props.image} />
          <div className={styles.created}>
            <UtcSecondsToDate created={this.props.created} />
          </div>
          <div className={styles.author}>
            {this.props.author.entityLabel}
          </div>
        </div>
      </ListGroupItem>
    );
  }
}

class NewsLatestWidget extends Component {
  render() {
    return (
      <Query query={newsArticlesIndexQuery} variables={{offset:0, limit:5, dateNow: '1536137598978'  }} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          if (data.nodeQuery.entities.length) {
            return (
              <ListGroup className={styles.articlesIndex}>
                {data.nodeQuery.entities.map(article =>
                  <NewsItem key={article.nid}
                            title={article.title}
                            url={article.entityUrl.path}
                            author={article.entityOwner}
                            image={article.fieldImage}
                            created={article.created}
                            body={article.body.value}
                            summary={article.body.summaryProcessed}
                  />
                )}
              </ListGroup>
            );
          }
        }}
      </Query>
    )
  }
}

export default NewsLatestWidget;



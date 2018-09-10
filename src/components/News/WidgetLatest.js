import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import styles from './news.scss';
import { Link } from 'react-router-dom';
import UtcSecondsToDate from './utcSecondsToDate';
import { ListGroup, ListGroupItem } from 'reactstrap';
import newsArticlesIndexQuery from "../../graphQL/newsArticlesIndexQuery";

import { Category } from './ArticleElements';


const Image = ({image}) => {

  if (image) {

    return (
      <div className={styles.image}>
        <img src={'http://res.cloudinary.com/dghff7rpa/image/upload/c_fit,w_380/v1536331737/2018-09/me.jpg'} alt={image.alt} />
      </div>
    );
  }
  return null;
}


class NewsItem extends Component {

  render() {
    return (
      <ListGroupItem className={styles.item}>
        <article>
          <Link  to={`/news${this.props.url}`}><Image image={this.props.image} /></Link>
          <div className={styles.summaryHeader}>
            <Category category={this.props.category} />
            <h2 className={styles.title}><Link to={`/news${this.props.url}`} className={styles.articleLink} >{this.props.title}</Link></h2>
            <div className={styles.meta}>
              <div className={styles.created}>
                <UtcSecondsToDate created={this.props.created} />
              </div>
              <div className={styles.author}>
                <Link to={this.props.author.entityUrl.path}>{this.props.author.entityLabel}</Link>
              </div>
            </div>
          </div>
        </article>
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
              <ListGroup className={styles.articlesWidget}>
                {data.nodeQuery.entities.map(article =>
                  <NewsItem key={article.nid}
                            title={article.title}
                            url={article.entityUrl.path}
                            author={article.entityOwner}
                            image={article.fieldImage}
                            created={article.created}
                            category={article.fieldCategory}
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


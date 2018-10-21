import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import styles from './news.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import UtcSecondsToDate from './utcSecondsToDate';
import { ListGroup, ListGroupItem } from 'reactstrap';
import newsArticlesIndexQuery from "../../graphQL/newsArticlesIndexQuery";
import { Category } from './ArticleElements';

import placeholderA from '../../media/placeholders/placeholder-5000x500-1.jpg'
import placeholderB from '../../media/placeholders/placeholder-5000x500-2.jpg'
import placeholderC from '../../media/placeholders/placeholder-5000x500-3.jpg'
import placeholderD from '../../media/placeholders/placeholder-5000x500-4.jpg'
import placeholderE from '../../media/placeholders/placeholder-5000x500-5.jpg'
import placeholderF from '../../media/placeholders/placeholder-5000x500-6.jpg'
const placeholderImages = [placeholderA, placeholderB, placeholderC, placeholderD, placeholderE, placeholderF];


const getPlaceholderImage = (id) => {
  return placeholderImages[id % placeholderImages.length]
};


const Image = ({id, image}) => {
  if (image) {
    return (
      <div className={cx(styles.imageContainer,'imageContainer')}>
        <img src={getPlaceholderImage(id)} alt={image.alt} />
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
          <Link  to={`/news${this.props.url}`} className={cx(styles.imageLink, 'imageLink')}><Image image={this.props.image} id={this.props.id} /></Link>
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
              <ListGroup className={cx(styles.articlesWidget)}>
                {data.nodeQuery.entities.map(article =>
                  <NewsItem key={article.nid}
                            id={article.nid}
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



import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import styles from './news.scss';
import { Link, Redirect } from 'react-router-dom';
import { OneColumnCenter }  from '../Layout';
import newsArticlesIndexQuery from '../../graphQL/newsArticlesIndexQuery';
import UtcSecondsToDate from './utcSecondsToDate';
import PageTitle from '../PageTitle'
import { ListGroup, ListGroupItem } from 'reactstrap';
import MainLayer from '../Content/MainLayer'
import ContentLayer from '../Content/ContentLayer'

import { Category, Image } from './ArticleElements';
import cx from "classnames";

import placeholderA from '../../media/placeholders/placeholder-5000x500-1.jpg'
import placeholderB from '../../media/placeholders/placeholder-5000x500-2.jpg'
import placeholderC from '../../media/placeholders/placeholder-5000x500-3.jpg'
import placeholderD from '../../media/placeholders/placeholder-5000x500-4.jpg'
import placeholderE from '../../media/placeholders/placeholder-5000x500-5.jpg'
import placeholderF from '../../media/placeholders/placeholder-5000x500-6.jpg'

const placeholderImages = [placeholderA, placeholderB, placeholderC, placeholderD, placeholderE, placeholderF];


class NewsItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
        redirect: false,
    };
  }
  handleOnClick = () => {
    // some action...
    // then redirect
    this.setState({redirect: true});
  }

  getPlaceholderImage () {
    return placeholderImages[this.props.id % placeholderImages.length]
  }

  render() {

    if (this.state.redirect) {
      return <Redirect push to={`/news${this.props.url}`} />;
    }

    return (
      <ListGroupItem className={styles.item}>
          <article onClick={this.handleOnClick}>
            <div className={styles.thumbnail}>
              <div className={styles.image}>
                <img src={this.getPlaceholderImage()} alt={''} />
              </div>
            </div>
            <div className={styles.summaryHeader}>
              <Category category={this.props.category} />
              <h2><Link to={`/news${this.props.url}`} className={styles.articleLink} >{this.props.title}</Link></h2>
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

NewsItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.object,
  created: PropTypes.string,
  category: PropTypes.string,
};

class NewsArticlesIndex extends Component {

  render() {
    return (
      <Query query={newsArticlesIndexQuery} variables={{ offset:0, limit:5, dateNow: '1536137598978'  }} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          if (data.nodeQuery.entities.length) {
            return (
              <ListGroup className={styles.articlesIndex}>
                {data.nodeQuery.entities.map(article =>
                  <NewsItem key={article.nid}
                            id={article.nid}
                            title={article.title}
                            url={article.entityUrl.path}
                            author={article.entityOwner}
                            created={article.created}
                            image={article.fieldImage}
                            category={article.fieldCategory}
                            body={article.body.value}
                            summary={article.body.summaryProcessed}/>
                )}
              </ListGroup>
            );
          }
        }}
      </Query>
    );
  }
}

class NewsIndexLayout extends Component {
  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <PageTitle title={'News Index'} layout={'center'} style={{}} />
          <OneColumnCenter contentMain={<NewsArticlesIndex />}  />
        </ContentLayer>
      </MainLayer>
    )
  }
}

export default NewsIndexLayout;



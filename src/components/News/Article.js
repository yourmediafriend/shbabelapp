import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";

import { Link } from 'react-router-dom';
import { TwoColumnRight }  from '../Layout';
import newsArticleQuery from '../../graphQL/newsArticleQuery';
import UtcSecondsToDate from './utcSecondsToDate';
import PageTitle from '../PageTitle'
import styles from './news.scss';
import cx from 'classnames';

class Article extends Component {

  render() {
    return (
      <article className={cx(styles.article,'article')}>
        <header className={styles.articleHeader}>
          <h1 className={styles.title}>{this.props.title}</h1>
          <div className={styles.created}>
            <UtcSecondsToDate created={this.props.created} />
          </div>

          <div className={styles.author}>
            <Link to={this.props.author.entityUrl.path}>{this.props.author.entityLabel}</Link>
          </div>


        </header>
        <section className={styles.articleContent}>
          <div dangerouslySetInnerHTML={{ __html: this.props.body }} />
        </section>
        <div className={styles.articleFooter}>
          Social and Comments etc
        </div>
      </article>
    )
  }
}

class NewsArticle extends Component {

  render() {
    return (
      <Query query={newsArticleQuery} variables={{path: `/${this.props.match.params.type}/${this.props.match.params.article}`}} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          const article = data.route.entity;

         if (typeof article !== "undefined") {

           debugger;

           return (
             <div className={styles.article}>
                <Article body={article.body.processed}
                         title={article.title}
                         author={article.entityOwner}
                         created={article.created}
                />
             </div>
           );
          }
          // no article returned
          return null;

        }}
      </Query>
    );
  }
}



class NewsArticleLayout extends Component {
  render() {
    return (
      <div>
        <TwoColumnRight contentMain={<NewsArticle match={this.props.match}/>}  contentColumnLeft={null} />
      </div>
    )
  }
}

export default NewsArticleLayout;



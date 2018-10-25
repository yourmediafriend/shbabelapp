import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';
import { TwoColumnLeft }  from '../Layout';
import newsArticleQuery from '../../graphQL/newsArticleQuery';
import UtcSecondsToDate from './utcSecondsToDate';
import Breadcrumbs from '../Breadcrumbs'
import styles from './news.scss';
import cx from 'classnames';
import Latest from './WidgetLatest';
import MainLayer from '../Content/MainLayer'
import ContentLayer from '../Content/ContentLayer'
import Widget from '../Widgets';
import widgetStyles from '../Widgets/widget.scss';
import {Category, Image} from './ArticleElements';

class ArticleSideBar extends Component {
  render() {
    return (
      <div>
        <Widget className={cx(styles.widgetNewsLatest, 'newsLatest')}  header={<h4 className={widgetStyles.title}>Latest News</h4>} body={<Latest />}/>
      </div>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <article className={cx(styles.article,'article')}>
        <header className={styles.articleHeader}>
          <Category category={this.props.category} />
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

Article.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.object,
  created: PropTypes.number,
  category: PropTypes.object,
  body: PropTypes.string,
};

class NewsArticle extends Component {
  render() {
    return (
      <Query query={newsArticleQuery} variables={{path: `/${this.props.match.params.type}/${this.props.match.params.article}`}} >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return `Error: ${error.message}`;
          const article = data.route.entity;

         if (typeof article !== "undefined") {
           return (
             <div className={styles.article}>
                <Article body={article.body.processed}
                         image={article.fieldImage}
                         title={article.title}
                         author={article.entityOwner}
                         created={article.created}
                         category={article.fieldCategory}
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

NewsArticle.propTypes = {
  match: PropTypes.string,
};

class NewsArticleLayout extends Component {
  render() {
    return (
      <MainLayer className={cx(styles.mainLayer)}>
        <ContentLayer className={cx(styles.contentLayer)} >
          <Breadcrumbs />
          <TwoColumnLeft className={styles.contentMain} contentMain={<NewsArticle match={this.props.match}/>}  contentColumnLeft={<ArticleSideBar />} />
        </ContentLayer>
      </MainLayer>
    )
  }
}

NewsArticleLayout.propTypes = {
  match: PropTypes.object,
};

export { ArticleSideBar };

export default NewsArticleLayout;



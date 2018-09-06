import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import styles from './news.scss';
import { Link } from 'react-router-dom';
import { TwoColumnRight }  from '../Layout';
import newsArticlesIndexQuery from '../../graphQL/newsArticlesIndexQuery';
import UtcSecondsToDate from './utcSecondsToDate';
import PageTitle from '../PageTitle'
import { ListGroup, ListGroupItem } from 'reactstrap';

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
        <img src={image.url} alt={image.alt} />
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
          <h2><Link to={`/news${this.props.url}`} className={styles.articleLink} >{this.props.title}</Link></h2>
          <div className={styles.created}>
            <UtcSecondsToDate created={this.props.created} />
          </div>
          <div className={styles.author}>
            <Link to={this.props.author.entityUrl.path}>{this.props.author.entityLabel}</Link>
          </div>
          <Category category={this.props.category} />
        </div>
        <Image image={this.props.image} />
        <div className={styles.summaryContent}>
          <div dangerouslySetInnerHTML={{ __html: this.props.summary }} />
        </div>
      </ListGroupItem>
    );
  }
}

class NewsArticlesIndex extends Component {

  render() {

    //console.log(Date.now());

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
      <div>
        <PageTitle title={'News Index'} layout={'center'} style={{}} />
        <TwoColumnRight contentMain={<NewsArticlesIndex />}  contentColumnLeft={null} />
      </div>
    )
  }
}

export default NewsIndexLayout;



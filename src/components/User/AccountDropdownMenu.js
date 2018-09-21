import React from 'react'
import { Query } from "react-apollo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';

import {get} from "lodash/fp";
import cx from 'classnames';
import { modalOpen } from "../../modules/Modal";
import { Nav, NavItem } from 'reactstrap';
import loginMenuQuery from '../../graphQL/loginMenuQuery';
import userAccountMenuQuery from '../../graphQL/userAccountMenuQuery';
import styles from './styles.scss';


const DropdownMenuItem = ({article, eventClick}) => {
  return (
    <NavItem className={cx(styles.menuItem)}><Link to={article.url.path ? article.url.path : '#'} >{article.label}</Link></NavItem>
  );
}

const DropdownMenu = props => {

  let loggedIn = true

  return (
    <Query query={loggedIn ? userAccountMenuQuery : loginMenuQuery} >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return `Error: ${error.message}`;
        if (data.menuByName.links.length) {

          console.log(data.menuByName.links);

          return (
            <Nav className={cx(styles.dropdownMenu, styles.account, styles.loggedOut)}>
              {data.menuByName.links.map((article, index) => <DropdownMenuItem key={index} article={article} eventClick={props.modalOpen} />)}
            </Nav>
          )
        }
        return null; // replace this with something relevant
      }}
    </Query>
  );
}

const mapStateToProps = state => {
  return {
    userID: get('userModule.UserID', state),
    isSearchModalOpen: get('modalModule.modalIsOpen', state),
    contentId: get('modalModule.contentRef', state),
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      modalOpen,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);

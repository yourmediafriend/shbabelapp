import React from 'react'
import PropTypes from 'prop-types';
import ReactHoverObserver from '../ReactHoverObserver';
import Icon from '../Icons';
import cx from 'classnames';

import { ListGroup, ListGroupItem } from 'reactstrap';
import styles from './iconNavStyles.scss';

const AppContext = React.createContext();

class AppProvider extends React.Component {

  render() {
    return (
      <AppContext.Provider value={this.props.value}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

let Link = ({icon, text, style, clickEvent, href }) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <a  href={href} className={cx(styles.link, context.isHovering ? styles.hover : '' )} onClick={clickEvent}>
            <span className={cx(styles.icon, styles[icon])}>
              {icon ? <Icon icon={icon} /> : <div>{text}</div>}
            </span>
          </a>
        )
      }}
    </AppContext.Consumer>
  );
}

let MenuItem = (props) => {
  return (
    <ReactHoverObserver
      hoverDelayInMs={props.hoverDelay ? props.hoverDelay : 0}
      hoverOffDelayInMs={props.hoverOffDelay ? props.hoverOffDelay : 0}
      className={cx(styles.reactHoverObserver)}
    >
      {({ isHovering }) => {
        return(
          <AppProvider value={{isHovering:isHovering, isSearchModalOpen: props.isSearchModalOpen }}>
            <div className={cx(styles.navItem)}>
              {props.children}
            </div>
          </AppProvider>
        )
      }}
    </ReactHoverObserver>
  )
}

const SocialIcons = (props) => {
  return (
    <ListGroup className={styles.socialMediaMenu}>
      <ListGroupItem><MenuItem><Link icon="facebook"  href={"/"}/></MenuItem></ListGroupItem>
      <ListGroupItem><MenuItem><Link icon="twitter"  href={"/"}/></MenuItem></ListGroupItem>
      <ListGroupItem><MenuItem><Link icon="googleplus"  href={"/"}/></MenuItem></ListGroupItem>
    </ListGroup>
  )
}

SocialIcons.props = { };

export default SocialIcons;
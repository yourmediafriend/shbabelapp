import React from 'react'
import PropTypes from 'prop-types';
import ReactHoverObserver from '../ReactHoverObserver';
import { Link } from 'react-router-dom';
import Icon from '../Icons';
import cx from 'classnames';
import AccountDropdown from './Dropdown/accountDropdown'

import { Nav, NavItem } from 'reactstrap';
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

let MenuLink = ({icon, text, style, clickEvent, href }) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <Link  to={href ? href : '#'} className={cx(styles.navLink, context.isHovering ? styles.hover : '' )} onClick={clickEvent}>
            <span className={cx(styles.icon, styles[icon])}>
              {icon ? <Icon icon={icon} /> : <div>{text}</div>}
            </span>
          </Link>
        )
      }}
    </AppContext.Consumer>
  );
}

let Dropdown = props => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <div className={cx(styles.dropdown, context.isHovering ? styles.show : '' )}>
            {props.children}
          </div>
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

const IconNav = (props) => {

  return (
    <Nav className={cx(styles.navList, styles[props.className])}>
      <NavItem>
        <MenuItem>
         <MenuLink icon="home"  href={"/"}/>
        </MenuItem>
      </NavItem>
      <NavItem >
        <MenuItem>
          <MenuLink icon='search' clickEvent={props.searchModalToggle.bind(this)}/>
        </MenuItem>
      </NavItem>
      <NavItem className={styles.account}>
        <MenuItem hoverOffDelay={250} >
          <MenuLink icon="account" clickEvent={props.modalToggle.bind(this, 'account', 0)} />
          <Dropdown>
            <AccountDropdown />
          </Dropdown>
        </MenuItem>
      </NavItem>
      <NavItem>
        <MenuItem>
          <MenuLink icon="contact" href={"/contact"} />
        </MenuItem>
      </NavItem>
      <NavItem>
        <MenuItem>
          <MenuLink icon="cart" />
        </MenuItem>
      </NavItem>
      <NavItem>
        <MenuItem>
          <MenuLink icon="location" clickEvent={props.modalOpen.bind(this, 'location')} />
        </MenuItem>
      </NavItem>
    </Nav>
  )
}

IconNav.props = {
  searchModalToggle: PropTypes.func,
  accountModalOpen: PropTypes.func,
  modalToggle: PropTypes.func,
}

export default IconNav;
import React from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ReactHoverObserver from '../ReactHoverObserver';
import { Link } from 'react-router-dom';
import Icon from '../Icons';
import cx from 'classnames';

import { AccountDropdownMenu } from '../User'
import { Dropdown as MiniCartDropdown } from '../MiniCart';

import { Nav, NavItem } from 'reactstrap';
import styles from './iconNavStyles.scss';
import {get} from "lodash/fp";




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
          <div className={cx(styles.dropdown, props.className, context.isHovering ? styles.show : '' )} style={{...props.style}}>
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

const IconNavHome = (props) => {
  return (
    <NavItem className={styles.home} >
      <MenuItem>
        <MenuLink icon="home"  href={"/"}/>
      </MenuItem>
    </NavItem>
  );
}
const IconNavSearch = (props) => {
  return (
    <NavItem className={styles.search} >
      <MenuItem>
        <MenuLink icon='search' clickEvent={props.searchModalToggle.bind(this)}/>
      </MenuItem>
    </NavItem>
  );
}
const IconNavAccount = (props) => {

  const showDropdown = () => {
    return (props.breakpoint === 'large' )
  };

  return (
    <NavItem className={styles.account}>
      <MenuItem hoverOffDelay={250} >
        <MenuLink icon="account" clickEvent={props.modalToggle.bind(this, 'account', 0)} />
        {showDropdown() ?   <Dropdown>
                              <AccountDropdownMenu />
                            </Dropdown> : null}
      </MenuItem>
    </NavItem>
  );
}
const IconNavContact = (props) => {
  return (
    <NavItem className={styles.contact}>
      <MenuItem>
        <MenuLink icon="contact" href={"/contact"} />
      </MenuItem>
    </NavItem>
  );
}

const IconNavCart = (props) => {

  const showDropdown = () => {
    return (props.breakpoint === 'large' )
  };

  const CartDropDown = () => {
    //style={{display:'block'}}
    return (
      <Dropdown className={cx('minCartDropdown')} >
        <MiniCartDropdown />
      </Dropdown>
    )
  };

  return (
    <NavItem className={styles.miniCart}>
      <MenuItem hoverOffDelay={250} >
        <MenuLink icon="cart" />
        {showDropdown() ? <CartDropDown /> : null}
      </MenuItem>
    </NavItem>
  );
}

const IconNav = (props) => {

  return (
    <Nav className={cx(styles.navList, styles[props.className])}>
      {props.menuItems.home ? <IconNavHome {...props} /> : ''}
      {props.menuItems.search ? <IconNavSearch {...props} /> : ''}
      {props.menuItems.account ? <IconNavAccount {...props} /> : ''}
      {props.menuItems.contact ? <IconNavContact {...props} /> : ''}
      {props.menuItems.cart ? <IconNavCart {...props} /> : ''}
    </Nav>
  )
}

IconNav.props = {
  searchModalToggle: PropTypes.func,
  accountModalOpen: PropTypes.func,
  modalToggle: PropTypes.func,
  menuItems: PropTypes.object,
}

IconNav.defaultProps = {
  menuItems: {
    home: true,
    search: true,
    account: true,
    contact: true,
    cart: true,
  },
};

export const mapStateToProps = (state) => {
  return {
    breakpoint: get('appModule.breakpoint', state)
  }
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(IconNav);

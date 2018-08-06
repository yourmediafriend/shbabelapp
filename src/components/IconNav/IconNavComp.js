import React from 'react'
import PropTypes from 'prop-types';
import ReactHoverObserver from '../ReactHoverObserver';
import Icon from '../Icons';
import cx from 'classnames';
import AccountDropdown from './Dropdown/accountDropdown'
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
          <a  href={href} className={cx(styles.navLink)}  onClick={clickEvent}>
            <span>
              {icon ? <Icon icon={icon} color={style.color} size={style.size} /> : <div>{text}</div>}
            </span>
          </a>
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
      className={cx(styles.ReactHoverObserver)}

    >
      {({ isHovering }) => {
        return(
          <AppProvider value={{isHovering:isHovering, isSearchModalOpen: props.isSearchModalOpen }}>
            <li className={cx(styles.navItem)}>
              {props.children}
            </li>
          </AppProvider>
        )
      }}
    </ReactHoverObserver>
  )
}

const IconNav = (props) => {

  return (
    <ul className={cx(styles.navList, styles[props.className])}>
      <MenuItem>
        <Link icon="home" style={{color:'#ffffff', size:22}} href={"/"}/>
      </MenuItem>
      <MenuItem >
        <Link icon='search' style={{color:'#ffffff', size:22}} clickEvent={props.searchModalToggle.bind(this)}/>
      </MenuItem>
      <MenuItem hoverOffDelay={250}>
        <Link icon="account" style={{color:'#ffffff', size:22}} clickEvent={props.modalToggle.bind(this, 'account', 0)} />
        <Dropdown>
          <AccountDropdown />
        </Dropdown>
      </MenuItem>
      <MenuItem>
        <Link icon="contact" style={{color:'#ffffff', size:26}} href={"/contact"} />
      </MenuItem>
      <MenuItem>
        <Link icon="cart" style={{color:'#ffffff', size:22}} />
      </MenuItem>
      <MenuItem>
        <Link icon="location" style={{color:'#ffffff', size:24}} clickEvent={props.modalOpen.bind(this, 'location')} />
      </MenuItem>
    </ul>
  )
}

IconNav.props = {
  searchModalToggle: PropTypes.func,
  accountModalOpen: PropTypes.func,
  modalToggle: PropTypes.func,
}

export default IconNav;
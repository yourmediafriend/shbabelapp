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

let Link = ({icon, text, style, clickEvent }) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <a  className={cx(styles.navLink)} onClick={clickEvent}>
            <div style={{ width:'22px',height:'22px',display:'block', overflow:'hidden'}}>
              {icon ? <Icon icon={icon} color={style.color} size={style.size} /> : <div>{text}</div>}
            </div>
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
          <div className={cx(styles.dropdown)}>
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
      hoverDelayInMs={250}
      hoverOffDelayInMs={250}
      styles={{height:'100%', display:'flex'}}
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
    <ul className={cx(styles.navList)}>
      <MenuItem >
        <Link icon='search' style={{color:'#ffffff', size:22}} clickEvent={props.searchModalOpen.bind(this)}/>
      </MenuItem>
      <MenuItem>
        <Link icon="account" style={{color:'#ffffff', size:22}} clickEvent={props.modalOpen.bind(this, 'account', 0)} />
        <Dropdown>
          <AccountDropdown />
        </Dropdown>
      </MenuItem>
      <MenuItem>
        <Link icon="cart" style={{color:'#ffffff', size:22}} />
      </MenuItem>
      <MenuItem>
        <Link icon="location" style={{color:'#ffffff', size:22}} clickEvent={props.modalOpen.bind(this, 'location')} />
      </MenuItem>
    </ul>
  )
}

IconNav.props = {
  searchModalToggle: PropTypes.func,
  accountModalOpen: PropTypes.func,
}

export default IconNav;
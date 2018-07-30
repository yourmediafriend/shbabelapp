'use strict';

export default {
  sidebarMenu: {
    base: {
      paddingTop: '3.375em',
      background: '#2b2b2b'
    }
  },
  menuTrigger: {
    base: {
      cursor: 'pointer',
      position: 'fixed',
      height: '100%',
      padding: '3.375em 0 0',
      background: '#222',
      transition: 'background-color .25s ease',
      display: 'block',
      top: '0',
      left: '0',
      zIndex: '255',
      width: '54px',
    },
    iconWrap: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '17px',
    }
  }
};





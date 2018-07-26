import { mediaQueries } from '../../utils/mediaQueries';

'use strict';

export default {
  nav: {
    list: {
      display:'none',
      [mediaQueries.breakpointMedium]: {
        display:'flex',
      },
      listStyle: 'none',
      margin: 0,
      padding: 0,
      height: '100%',
      float: 'left'
    },
    item: {
      ':hover': {}
    },

    link: {
      height: '100%',
      color: '#ffffff',
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '.075em',
      padding: '0 20px 0',
      hover: {
        backgroundColor: '#333333',
      }
    },
  },


  dropdown: {
    base: {
      display:'none',
      [mediaQueries.breakpointMedium]: {
        display:'inline-block',
      },
      height: '100%',
      ':hover': {}
    },
    item: {
      height: '100%',

    },
    menu: {
      position: 'absolute',
      top: '100%',
      backgroundColor: '#333333',
      borderBottom: '1px solid #000',
      color: '#fff',
      padding: '40px'
    }
  },



  subtree: {



    base: {

    },
    'level0': {

    }
  },
  loading: {
    color: '#E2C089'
  },


  megamenu: {

    outer: {
      listStyle: 'none',
      position: 'absolute',
      left: 0,
      top: '100%',
      width: '100%',
      overflow: 'hidden',
      display: 'none',
      pointerEvent: 'none',
      borderTop: '15px solid #333333',
    },
    inner: {
      backgroundColor: '#333333',
      color: '#fff',
      padding: '0 30px 15px',
    },
    layout: {
      display: 'flex',
      flexDirection: 'row',
      columns: {
        base: {
          listStyle: 'none',
        },
        threeQuarter: {
          width: '75%',
        },
        oneQuarter: {
          width: '25%',
          borderRight: '1px solid rgb(82, 80, 80)',
          padding: '8px 20px',
          highlite: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRightColor: 'transparent',
          }
        },
      },
    },
  },
  menulist: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '1em',
    menuTitle: {
      fontSize: '1.1em',
      fontWeight: 'bold',
      color: '#e4af45',
    },
    a: {
      fontSize: '0.9em',
      color: '#fff'

    }
  }
};

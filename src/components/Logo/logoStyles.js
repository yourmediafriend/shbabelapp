import { mediaQueries } from '../../utils/mediaQueries';

'use strict';

export default {
  logo: {
    wrap: {
      position: 'fixed',
      zIndex: '1500',
      width: '30vw',
      background: 'rgba(0, 0, 0, 0.6)',
      overflow: 'hidden',
      top: '0px',
      left: '0px',
      [mediaQueries.breakpointLarge]: {
        width: '12vw',
        transformOrigin: '100% 0',
        transform: 'rotate(90deg) translatex(100%)',
      },
      ':hover': {},
      inner: {
        position: 'relative',
        display: 'block',
        padding: '4px',
        top: '-8px',
        marginBottom: '-8px',
        right: '-6px',
        marginLeft: '-6px',
        [mediaQueries.breakpointLarge]: {
          padding: '5px',
          top: '-12px',
          left: '-10px',
          marginBottom: '-12px',
          marginRight: '-10px',
        },
      }
    },
    svg: {
      fill: 'white',
      display: 'block',
      width: '100%',
      height: 'auto',
      lineHeight: 0,
      hover: {
        fill: '#c30d0d'
      }
    },
  }
};

'use strict';

import { mediaQueries } from '../../utils/mediaQueries';


export default {
  hero: {
    base: {
      position: 'relative',
      width:'100%',
      flex: 1,
      minHeight: '50vh',
      [mediaQueries.breakpointLarge]: {
        minHeight: 'calc(100vh - 80px)',
      },


    },
    inner: {
      objectFit: 'cover',
      height: '100%',
      width: '100%',
      display: 'block',
    },
    img: {
      objectFit: 'cover',
      position: 'absolute',
      top: '0',
      height: '100%',
    },
    bgImg: {
      width:'100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'block',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.1)',
      zIndex: 10
    },
    content: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 20,
      bottom: {
        top: 'auto',
        bottom: 0
      }
    }
  },
};

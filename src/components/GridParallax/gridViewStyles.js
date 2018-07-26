import { mediaQueries } from '../../utils/mediaQueries';

'use strict';

export default {
  grid: {
    base: {
      display:'flex',
      flexWrap :'wrap',
    },
    item: {
      width:'100%',
      padding: '12px',
      [mediaQueries.breakpointSmall]: {
        width:'50%',
      },
      [mediaQueries.breakpointLarge]: {
        width:'33.333333%',
      },
      inner: {
        background: '#fff',
        height: '300px',
        transition: 'all 0.3s ease',
        ':hover':{
          transform: 'translateZ(0) scale(1.05)',
          boxShadow: '0px 5px 10px 0px #1d1d1d'
        }
      },
      imageWrapper: {
        background: '#ccc',
        overflow: 'hidden',
        height: '150px',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        display: 'block',
        position: 'relative',
      },
      imageOverlay: {
        width:'calc(100% + 10px)',
        height:'calc(100% + 10px)',
        backgroundColor:'rgba(0, 0, 0, 0.29)',
        position:'absolute',
        top: '-5px',
        left: '-5px',
        padding:'10px',
      },
      titleWrapper: {
        position:'absolute',
        bottom: '5px',
      },
      title: {
        fontSize: '0.8em',
        letterSpacing: '0.09em',
        textTransform: 'uppercase',
        color: '#fff',
        marginBottom: '0.2rem',
        span: {
          backgroundColor:'rgba(0, 0, 0, 0.8)',
          display: 'inline-block',
          padding: '3px'
        }
      },
      subTitle: {
        color: '#ccc',
        textTransform: 'none',
      }
    }
  }
};
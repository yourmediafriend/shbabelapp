'use strict';

export default {
  slide: {
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    position: 'relative'
  },
  svgOuter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: '100',
    display: 'block',
    width: '30vw',
    height: '30vw',
    transform: 'translate(-50%, -50%)',
  },
  svgHypno: {
    width: '35vw',
    height: '35vw',
    borderRadius: '50%',
    webkitTransform: 'translate3d(-50%,-50%,0)',
    webkitMaskImage: '-webkit-radial-gradient(circle, white 100%, black 100%)'
  }
};

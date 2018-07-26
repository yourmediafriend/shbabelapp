'use strict';

export default {

  parallax: {
    parallaxContentHolder: {
      position: 'relative',
      perspective: '1000px',
      display: 'block',
      zIndex: '-1'
    },
    parallaxContent: {
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      display: 'block',
    },
  },
  hero: {
    bgImg: {
      width:'100vw',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'block',
    }
  },
  contentBlock: {
    base: {
      backgroundColor: '#212121',
      color: 'rgba(255, 255, 255, 0.9)',
    },
    wrapper: {
      padding: '120px 0',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2,
    }
  }
};

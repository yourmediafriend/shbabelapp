'use strict';

export default {

  parallax: {
    scrollableContainer: {
      position: 'relative',
      zIndex: 1,
    },
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
    }
  }
};

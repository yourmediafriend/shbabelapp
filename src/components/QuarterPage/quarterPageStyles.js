export default {
  page: {
    base: {
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex'
    }
  },
  panel: {
    quarter: {
      flex: '1 100%',
    },
    backpanel: {
      width: '100%',
      height: '100%',
      position: 'relative',
      ':hover':{}
    },
    layer: {
      base: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'hidden',
      },
      svg: {
        height:'100vh',
      }
    }
  },
  overlay: {
    base: {
      backgroundPosition: 'bottom left',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 10,
    }
  }
};
export default {
  container: {
    outer: {
      overflow: 'hidden',
      position: 'relative',
    },
    inner: {
      backgroundColor: '#3c3c3c',
    },
    main: {
      position: 'relative',
      zIndex: 100,
      backgroundColor: '#3c3c3c',
      boxShadow: '0px 3px 28px #0c0c0c6e',
      light: {
        backgroundColor: '#ffffff',
      },
      center: {
        maxWidth: '1200px',
        margin: '0px auto',
      },

    },
    scroll: {
      width: '100%',
      height: '100vh',
      overflow: 'scroll',
      display: 'flex',
      flexDirection: 'column',
    },
    fixed: {
      position: 'fixed',
      width: 'calc(100vw - 54px)',
      height: '100vh',
      overflow: 'hidden',
      zIndex: '10',
      pointerEvents: 'none',
      top: 0,
      left: '54px'
    }
  },
  menu: {
    variables: {
      test: '200',
    },
    position: 'fixed',
    background: '#2b2b2b',
    color: 'black',
    width: '280px',
    height: '100vh',
    overflow: 'auto',
    zIndex: '20',
    borderLeft: '1px solid #2B2B2B',
  }
};

export default {
  container: {
    base: {
      width: '100%',
      backgroundColor: '#ffffff',
    },
    inner: {
      width: '100%',
      margin: '0 auto',
      maxWidth: '1200px',
      display: 'flex'
    },
    sideleft: {
      padding: '40px 15px',
      flex: '0 0 300px',
 /*     position: 'relative'*/
    },
    main: {
      padding: '40px 15px',
      flex: '1'
    }
  },
  sideleft: {
    panel: {
      border: '1px solid rgb(222, 222, 222)',
      width: '100%',
      height: '300px',
      padding: '20px',
      marginBottom: '20px',
      borderRadius: '5px',
      backgroundColor: '#fff',
    }

  }

};

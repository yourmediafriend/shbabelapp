'use strict';

export default {
  footer: {
    base: {
      width: '100%',
      position: 'fixed',
      zIndex: 200,
      bottom: 0,
      backgroundColor: 'rgb(191, 191, 191)',
      borderTop: '1px solid rgb(152, 152, 152)'
    },
    inner: {
      width: '100%',
      margin: '0 auto',
      maxWidth: '1200px',
      display: 'flex'
    },
    reveal: {
      borderTop: '0',
      zIndex: 50,
      backgroundColor: 'rgb(86, 86, 86)',
    }
  }
};

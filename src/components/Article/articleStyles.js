import { mediaQueries } from '../../utils/mediaQueries';

export default {
  content: {
    column: {
      main: {
        maxWidth: '38.75rem',
        margin: 'auto',
        position: 'relative',
      }
    }
  },
  article: {
    main: {
      marginTop: '2em',
    },
  },
  figure: {
    thumbnail: {
      width: '7.5rem',
      float: 'left',
      clear: 'left',
      paddingBottom: 0,
      marginBottom: '0.75rem',
      marginRight: '1.25rem',
      marginTop: '0.375rem',
      [mediaQueries.breakpointLarge]: {
        width: '8.5rem',
        marginRight: '0',
        marginLeft: '-10rem',
      },
      landscape: {
        float: 'left',
        clear: 'left',
        paddingBottom: 0,
        marginBottom: '0.75rem',
        marginRight: '1.25rem',
        marginTop: '0.375rem',

        [mediaQueries.breakpointLarge]: {
          width: '28.5rem',
          marginLeft: '-16.75rem',
        },

      },
    },
    image: {
      [mediaQueries.breakpointLarge]: {
        marginLeft: '-18.07rem',
      },
      full: {
        marginLeft: '-1.25rem',
        marginRight: '-1.25rem',
        [mediaQueries.breakpointLarge]: {
          marginLeft: '-18.07rem',
          marginRight: '-18.07rem',
        },
      },
    },
    caption: {

      marginTop: '1rem',
      fontSize: '0.8em',
      borderTop: '1px solid #b3b3b3',
      paddingTop: '0.5em',

      [mediaQueries.breakpointLarge]: {
        float: 'left',
        clear: 'left',
        marginLeft: '1.25rem',
        width: '15.25rem',
        marginTop: '1.5rem',
      },


    }
  },
  aside: {
    left: {
      [mediaQueries.breakpointLarge]: {
        float: 'left',
        clear: 'left',
        width: '15.75rem',
        marginLeft: '-16.75rem',
      },
    },
  },
  blockquote: {
    color: '#005689',
    fontSize: '1.4em',
  },
  dateline: {
    fontSize: '0.8em',
    marginTop: '0.2em',
    [mediaQueries.breakpointLarge]: {
      float: 'left',
      clear: 'left',
      width: '15.75rem',
      marginLeft: '-16.75rem',
    },
  },
  hero: {
    main: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: '#ffffff',
      display: 'inline-block',
      width: '100%',
      padding: '20px',
    },
  }
};

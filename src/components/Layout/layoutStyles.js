import { mediaQueries } from '../../utils/mediaQueries';

'use strict';

export default {
  container: {
    base: {
      width: '100%',
    },
    inner: {
      width: '100%',
      margin: '0 auto',
      maxWidth: '1200px',
      display: 'flex'
    },
    sideleft: {
      display: 'none',
      [mediaQueries.breakpointMedium]: {
        display: 'inherit',
        padding: '0px 15px',
        flex: '0 0 300px',
      },
    },
    sideright: {
      display: 'none',
      [mediaQueries.breakpointMedium]: {
        display: 'inherit',
        padding: '0px 15px',
        flex: '0 0 300px',
      },
    },
    main: {
      padding: '0px 15px',
      flex: '1'
    }
  }
};

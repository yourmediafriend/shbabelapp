const breakPoints = {
  small:  '480px',
  medium: '768px',
  large:  '1024px',
};

const mediaMatch = {
  breakpointSmall:  'screen and (min-width: '+ breakPoints.small +')',
  breakpointMedium: 'screen and (min-width: '+ breakPoints.medium +')',
  breakpointLarge:  'screen and (min-width: '+ breakPoints.large +')',
};

const mediaQueries = {
  breakpointSmall:  '@media ' + mediaMatch.breakpointSmall,
  breakpointMedium: '@media ' + mediaMatch.breakpointMedium,
  breakpointLarge:  '@media ' + mediaMatch.breakpointLarge,
};

export {breakPoints, mediaQueries, mediaMatch};
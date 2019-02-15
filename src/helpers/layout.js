import { StyleSheet } from 'aphrodite'

const breakpoints = {
  xlarge: 1680,
  large: 1280,
  medium: 980,
  small: 736,
  xsmall: 480,
  xxsmall: 360
};

export const mediaQuery = {
  maxWidth: {
    xlarge: `@media (max-width:${breakpoints.xlarge}px)`,
    large: `@media (max-width:${breakpoints.large}px)`,
    medium: `@media (max-width:${breakpoints.medium}px)`,
    small: `@media (max-width:${breakpoints.small}px)`,
    xsmall: `@media (max-width:${breakpoints.xsmall}px)`,
    xxsmall: `@media (max-width:${breakpoints.xxsmall}px)`
  },
};

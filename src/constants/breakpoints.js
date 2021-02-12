import {createBreakpoint} from 'styled-components-breakpoint';
 
const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
 
export const breakpoint = createBreakpoint(breakpoints);
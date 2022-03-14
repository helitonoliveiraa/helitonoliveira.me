import { globalCss } from './index';

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html, body, #__next': {
    minHeight: '-webkit-fill-available',
    height: '-webkit-fill-available',
  },
  'body, button': {
    fontFamily: '$default',
  },
});

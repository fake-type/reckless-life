import { globalStyle } from '@vanilla-extract/css'
import { jetBrainsMono } from './fonts.css'

globalStyle('*', {
  padding: 0,
  margin: 0,
  textDecoration: 'none',
  boxSizing: 'border-box'
})

globalStyle('body', {
  fontFamily: ['system-ui', jetBrainsMono],
  color: 'hsl(0, 0%, 100%)',
  backgroundColor: '#242424'
})

globalStyle('ol, ul, menu', {
  listStyle: 'none'
})

globalStyle('a', {
  color: 'currentcolor',
  textDecoration: '#7d128d wavy underline'
})

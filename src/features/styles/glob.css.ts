import { globalStyle } from '@vanilla-extract/css'
import { jetBrainsMono } from './fonts.css'

globalStyle('*', {
  padding: 0,
  margin: 0,
  boxSizing: 'border-box'
})

globalStyle('body', {
  fontFamily: ['system-ui', jetBrainsMono],
  color: 'hsl(0, 0%, 100%)',
  backgroundColor: 'hsl(0, 0%, 12%)'
})

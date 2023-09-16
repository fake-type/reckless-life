import { globalStyle, style } from '@vanilla-extract/css'
import { martianMono } from './fonts.css'

globalStyle('*, :after, :before', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
})

export const BodyStyled = style({
  fontFamily: martianMono,
  color: 'hsl(0, 0%, 100%)',
  backgroundColor: '#242424'
})

export const PageStyled = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '.5em',
  minHeight: ['100dvh', '100vh']
})

globalStyle('ol, ul, menu', { listStyle: 'none' })

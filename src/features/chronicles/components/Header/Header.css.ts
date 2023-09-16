import { style } from '@vanilla-extract/css'

export const HeaderStyle = style({
  position: 'sticky',
  zIndex: '4',
  top: '0',
  padding: '.4rem',
  maxWidth: '48em',
  borderBottom: '1px solid #5e5c64',
  backgroundColor: 'hsla(0, 0%, 14%, 0.8)',
  WebkitBackdropFilter: 'blur(5px)',
  backdropFilter: 'blur(5px)'
})

import { pageContainerSizes } from '@layouts/Default/Default.css'
import { style } from '@vanilla-extract/css'

export const HeaderStyle = style({
  display: 'flex',
  justifyContent: 'center',
  position: 'sticky',
  zIndex: '4',
  top: '0',
  padding: '1rem 0em',
  borderBottom: '1px solid #5e5c64',
  backgroundColor: 'hsla(0, 0%, 14%, 0.8)',
  WebkitBackdropFilter: 'blur(5px)',
  backdropFilter: 'blur(5px)',

  '@container': {
    [pageContainerSizes.laptop]: {
      display: 'none'
    }
  }
})

import { style } from '@vanilla-extract/css'
import { pageContainer } from '@features/pageElement/page.css'

export const AsideStyle = style({
  width: '50%',
  display: 'none',
  justifyContent: 'flex-end',

  '@container': {
    [`${pageContainer} (min-width: 1040px)`]: {
      display: 'flex'
    }
  }
})

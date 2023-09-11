import { style } from '@vanilla-extract/css'
import { pageContainer } from '@features/pageElement/page.css'

export const AsideStyle = style({
  width: 'fit-content',
  display: 'none',

  '@container': {
    [`${pageContainer} (min-width: 1040px)`]: {
      display: 'block'
    }
  }
})

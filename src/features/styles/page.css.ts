import { style, createContainer, globalStyle } from '@vanilla-extract/css'

export const pageContainer = createContainer()

export const pageStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: ['100vh', '100dvh'],
  containerType: 'inline-size',
  containerName: pageContainer
})

export const contentStyle = style({
  fontSize: '1.2em',
  padding: '0 .8em',
  maxWidth: '20em',

  '@container': {
    [`${pageContainer} (min-width: 90em)`]: {
      fontSize: '1.5em'
    }
  }
})

globalStyle(`${contentStyle} h1`, {
  padding: '.2em 0'
})

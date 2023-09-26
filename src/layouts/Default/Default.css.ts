import { createContainer, style } from '@vanilla-extract/css'

export const PageContainerName = createContainer()
export const PageWrapperName = createContainer()

export const pageContainerSizes = {
  tablet: `${PageContainerName} (min-width: 768px)`,
  laptop: `${PageContainerName} (min-width: 1024px)`
}

export const PageWrapperStyled = style({
  minHeight: ['100vh', '100dvh'],
  containerType: 'inline-size',
  containerName: PageWrapperName
})

export const PageStyled = style({
  display: 'flex',
  gap: '.6em',
  margin: 'auto',
  maxWidth: '1440px',
  containerType: 'inline-size',
  containerName: PageContainerName
})

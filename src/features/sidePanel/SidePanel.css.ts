import { pageContainerSizes } from '@layouts/Default/Default.css.ts'
import { createContainer, style } from '@vanilla-extract/css'

export const SidePanelContainerName = createContainer()
export const MenuStyledContainerName = createContainer()

export const SidePanelStyled = style({
  display: 'none',
  padding: '1em',
  width: '20em',
  containerType: 'inline-size',
  containerName: SidePanelContainerName,

  '@container': {
    [pageContainerSizes.laptop]: {
      display: 'flex',
      flexFlow: 'column nowrap'
    }
  }
})

export const MenuStyled = style({
  position: 'sticky',
  display: 'flex',
  justifyContent: 'flex-end',
  top: '1em',
  containerName: MenuStyledContainerName
})

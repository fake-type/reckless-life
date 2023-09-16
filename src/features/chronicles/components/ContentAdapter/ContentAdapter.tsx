import { FunctionComponent, PropsWithChildren } from 'react'
import { ContentContainer, ContentStyled } from './ContentAdapter.css'

const ContentAdapter: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={ContentContainer}>
      <article className={ContentStyled}>{children}</article>
    </div>
  )
}

export default ContentAdapter

import { FunctionComponent, PropsWithChildren } from 'react'
import { ContentContainer, TextContent } from './ContentAdapter.css'

const ContentAdapter: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className={ContentContainer}>
      <div className={TextContent}>{children}</div>
    </div>
  )
}

export default ContentAdapter

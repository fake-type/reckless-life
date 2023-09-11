import type { FunctionComponent, PropsWithChildren } from 'react'
import { ContentStyle } from './Content.css.ts'

const Content: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <div className={ContentStyle}>{children}</div>
    </main>
  )
}

export default Content

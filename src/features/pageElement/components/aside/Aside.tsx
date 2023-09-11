import { FunctionComponent } from 'react'
import { AsideStyle } from './Aside.css.ts'

const Aside: FunctionComponent = () => {
  return (
    <aside className={AsideStyle}>
      <div>Aside</div>
      <div>
        <ul>
          <li>
            <a href="/chronicles">chronicles</a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Aside

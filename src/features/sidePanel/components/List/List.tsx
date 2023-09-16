import { FunctionComponent } from 'react'

type Props = {
  list: string[]
}

const List: FunctionComponent<Props> = ({ list }) => {
  return (
    <ul>
      {list.flatMap((item, key) => (
        <li key={key}>
          <a href={`/${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  )
}

export default List

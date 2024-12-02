import { Children, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Row({children}: Props) {
  return (
    <tr>{children}</tr>
  )
}

export default Row
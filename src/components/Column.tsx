import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Column({children}: Props) {
  return (
    <td className='border w-24 h-6  border-gray-300 min-w-24'>{children}</td>
  )
}

export default Column
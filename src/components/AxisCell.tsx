import { ReactNode } from "react";


type Props = {
    children: ReactNode 
}

function AxisCell({children}: Props) {
  return (
    <th className="bg-gray-200 font-normal border-2 border-black px-1">{children}</th>
  )
}

export default AxisCell
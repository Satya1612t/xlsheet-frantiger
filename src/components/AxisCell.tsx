import { ReactNode } from "react";


type Props = {
    children: ReactNode 
}

function AxisCell({children}: Props) {
  return (
    <th className="bg-gray-100 font-normal border-[1px] text-xs border-gray-400 px-1">{children}</th>
  )
}

export default AxisCell